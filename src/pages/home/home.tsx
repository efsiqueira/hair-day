import { Agenda, Schedule } from "../../features"

export const Home = () => {
  return (
    <div className="flex p-6 gap-3 bg-gray-800">
      <Schedule />
      <Agenda />
    </div>
  )
}