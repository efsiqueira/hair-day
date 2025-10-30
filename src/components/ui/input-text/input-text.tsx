import { cva, cx, type VariantProps } from "class-variance-authority"
import { textVariants } from "../text"
import { Icon } from "../icon"

export const inputTextVariants = cva(`
  p-3
  w-full
  border
  rounded-lg
  border-solid
  outline-none
  transition-colors
`, {
  variants: {
    variant: {
      primary: "bg-transparent border-gray-500 focus:border-yellow-base"
    },
    size: {
      md: "h-12 text-base"
    },
    disabled: {
      true: "pointer-events-none opacity-50"
    },
  },
  defaultVariants: {
    size: "md",
    disabled: false,
    variant: "primary",
  }
})

export const inputTextIconVariants = cva(`
  left-3 absolute pointer-events-none
`, {
  variants: {
    variant: {
      primary: "fill-yellow-base"
    },
    size: {
      md: "w-5 h-5"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
})

export const inputTextWrapperVariants = cva(`
  inline-flex items-center justify-center relative group  
`)

interface InputTextProps extends VariantProps<typeof inputTextVariants>, Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  icon?: React.ComponentProps<typeof Icon>["svg"]
}

export const InputText = ({ icon, size, variant, disabled, className, ...props }: InputTextProps) => {
  const inputPadding = icon ? "pl-10" : ""

  return (
    <div className={inputTextWrapperVariants()}>
      {icon && (
        <Icon
          svg={icon}
          className={inputTextIconVariants({ variant, size })}
        />
      )}
      <input
        className={cx(
          inputTextVariants({ size, disabled, variant }),
          textVariants({ className: "text-gray-200 focus:placeholder-transparent" }),
          inputPadding,
          className
        )}
        {...props}
      />
    </div>
  )
}