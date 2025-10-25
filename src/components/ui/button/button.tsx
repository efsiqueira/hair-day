import { cva, type VariantProps } from "class-variance-authority"
import { Text } from "../text"

export const buttonVariants = cva(`
  flex
  items-center
  justify-center
  cursor-pointer
  transition
  rounded-lg
  group
  gap-2
`, {
  variants: {
    variant: {
      primary: "bg-yellow-base hover:bg-yellow-light",
    },
    size: {
      md: "h-14 py-4 px-5"
    },
    disabled: {
      true: "opacity-50 pointer-events-none"
    },
    handling: {
      true: "pointer-events-none"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    disabled: false,
    handling: false
  }
})

interface ButtonProps extends Omit<React.ComponentProps<"button">, "size" | "disabled">, VariantProps<typeof buttonVariants> {
  handling?: boolean
}

export const Button = ({ size, variant, disabled, className, children, handling, ...props }: ButtonProps) => {
  return (
    <button
      className={
        buttonVariants({ variant, size, disabled, handling, className })
      }
      {...props}
    >
      <Text variant="sm-bold" className="text-gray-900">
        {children}
      </Text>
    </button>
  )
}