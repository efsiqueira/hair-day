import { Schedule } from "./components"
import { Agenda } from "./components/agenda/agenda"

export const App = () => {

  return (
    <div className="flex p-6 gap-3 bg-gray-800">
      <Schedule />
      <Agenda />
    </div>
  )
}

