import { cva, cx, type VariantProps } from "class-variance-authority"
import { Icon } from "../icon"
import { textVariants } from "../text"
import ArrowDown from "../../../assets/icons/arrow-down.svg?react"
import { useRef } from "react"


export const inputDateVariants = cva(`
  p-3
  w-full
  border
  rounded-lg
  border-solid
  outline-none
  duration-200
  appearance-none
  transition-colors
  hover:cursor-pointer
  [&::-webkit-clear-button]:hidden
  [&::-webkit-inner-spin-button]:hidden
  [&::-webkit-calendar-picker-indicator]:hidden
`, {
  variants: {
    variant: {
      primary: "bg-transparent border-gray-500 focus:border-yellow-base",
    },
    size: {
      md: "h-12 text-base",
    },
    disabled: {
      true: "pointer-events-none opacity-60",
    },
  },
  defaultVariants: {
    size: "md",
    disabled: false,
    variant: "primary",
  },
})

export const inputDateIconVariants = cva(`
  absolute pointer-events-none
`, {
  variants: {
    variant: {
      primary: "fill-yellow-base",
      secondary: "fill-gray-300"
    },
    size: {
      sm: "w-4 h-4",
      md: "w-5 h-5"
    },
    iconPosition: {
      left: "left-3",
      right: "right-3"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
    iconPosition: "left"
  },
})

export const inputDateWrapperVariants = cva(`
  inline-flex items-center justify-center relative group
`)

interface InputDateProps
  extends VariantProps<typeof inputDateVariants>,
  Omit<React.ComponentProps<"input">, "size" | "disabled" | "type"> {
  icon?: React.ComponentProps<typeof Icon>["svg"]
}

export const InputDate = ({
  icon,
  size,
  variant,
  disabled,
  className,
  ...props
}: InputDateProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const inputPadding = icon ? "pl-10" : ""

  const getLocalDateISO = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}` // yyyy-mm-dd
  }

  const today = getLocalDateISO()

  const handleIconClick = () => {
    if (inputRef.current && !disabled) {
      inputRef.current.showPicker?.()
    }
  }

  return (
    <div className={inputDateWrapperVariants()} onClick={handleIconClick}>
      {icon && (
        <Icon
          svg={icon}
          className={inputDateIconVariants({ variant, size })}
        />
      )}

      <input
        type="date"
        ref={inputRef}
        className={cx(
          inputDateVariants({ size, disabled, variant }),
          inputPadding,
          textVariants({ className: "text-gray-200" }),
          className
        )}
        {...props}
        defaultValue={today}
      />

      <Icon
        svg={ArrowDown}
        className={inputDateIconVariants({
          size: "sm",
          variant: "secondary",
          iconPosition: "right"
        })}
      />
    </div>
  )
}