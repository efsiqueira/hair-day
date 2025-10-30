import type { ReactNode } from "react"
import { Text } from "../ui"

interface DivSectionProps {
  children: ReactNode
  sectionTitle: string
}

export const DivSection = ({ children, sectionTitle, ...props }: DivSectionProps) => {
  return (
    <div className="flex flex-col gap-2" {...props}>
      <Text variant="md-bold" className="text-gray-200">{sectionTitle}</Text>
      {children}
    </div>
  )
}