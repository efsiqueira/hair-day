import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

export const cardVariants = cva(`
  flex
  border
  text-md
  rounded-lg
  items-center
  border-solid
  justify-center
`, {
  variants: {
    variant: {
      primary: `
        bg-gray-600
        text-gray-200
        border-gray-500
        hover:bg-gray-500
        hover:cursor-pointer
      `,
      disabled: `
        bg-gray-700
        text-gray-500
        border-gray-600
        hover:cursor-not-allowed
        `,
      selected: `
        bg-gray-600
        text-yellow-base
        border-yellow-base
        hover:cursor-pointer
        hover:text-gray-900
        hover:bg-yellow-base
      `
    },
    size: {
      none: "",
      md: "h-10"
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "none",
  }
})

interface CardProps extends VariantProps<typeof cardVariants>, React.ComponentProps<"div"> {
  as?: keyof React.JSX.IntrinsicElements,
}

export const Card = ({ as = "div", size, children, className, variant, ...props }: CardProps) => {
  return React.createElement(
    as,
    {
      className: cardVariants({ size, variant, className }),
      ...props
    },
    children
  )
}