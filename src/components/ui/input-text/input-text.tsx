import { cva, cx, type VariantProps } from "class-variance-authority"
import { textVariants } from "../text"
import { Icon } from "../icon"

export const inputTextVariants = cva(`
  p-3
  px-10
  w-full
  border
  rounded-lg
  border-solid
  outline-none
`, {
  variants: {
    variant: {
      primary: "bg-transparent border-gray-500 focus:border-yellow-base"
    },
    size: {
      md: "h-12"
    },
    disabled: {
      true: "pointer-events-none"
    },
  },
  defaultVariants: {
    size: "md",
    disabled: false,
    variant: "primary",
  }
})

export const inputTextIconVariants = cva(`
  absolute top-1/2 left-3 -translate-y-1/2 cursor-pointer
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
  return (
    <label className={inputTextWrapperVariants({ className })}>
      {icon && (
        <Icon
          svg={icon}
          className={inputTextIconVariants({ variant, size })}
        />
      )}
      <input
        className={cx(
          inputTextVariants({ size, disabled }),
          textVariants({ className: "text-gray-200" }),
          className
        )}
        {...props}
      />
    </label>
  )
}