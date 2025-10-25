import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const textVariants = cva(`
  font-sans text-gray-100
`, {
  variants: {
    variant: {
      "sm-regular": "text-sm leading-6 font-normal",
      "sm-bold": "text-sm leading-6 font-bold",
      "md-regular": "text-base leading-6 font-normal",
      "md-bold": "text-base leading-6 font-bold",
      "2xl-bold": "text-2xl leading-8 font-bold"
    }
  },
  defaultVariants: {
    variant: "md-regular"
  }
})

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements,
  className?: string,
  children?: React.ReactNode
}

export const Text = ({ as = "span", variant, className, children, ...props }: TextProps) => {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props
    },
    children
  )
}