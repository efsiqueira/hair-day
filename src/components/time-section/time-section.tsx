import { Card, Text } from "../ui"

interface TimeSectionProps {
  label: string
  times: { id: number, value: string }[]
}

export const TimeSection = ({ label, times }: TimeSectionProps) => {
  return (
    <div>
      <Text variant="sm-regular" className="text-gray-300">{label}</Text>
      <div className="grid grid-cols-4 gap-2">
        {times.map((time) => (
          <Card size="md" key={time.id}>{time.value}</Card>
        ))}
      </div>
    </div>
  )
}