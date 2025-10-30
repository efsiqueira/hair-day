import { Icon, InputDate, Text } from "../../../components"
import CalendarIcon from "../../../assets/icons/calendar.svg?react"
import SunHorizon from "../../../assets/icons/sun-horizon.svg?react"
import CloudSun from "../../../assets/icons/cloud-sun.svg?react"
import MoonStars from "../../../assets/icons/moon-stars.svg?react"
import Trash from "../../../assets/icons/trash.svg?react"

export const Agenda = () => {
  return (
    <div className="bg-gray-800 flex flex-col flex-1 py-20 px-28 gap-8">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-1">
          <Text variant="2xl-bold">Sua agenda</Text>
          <Text variant="sm-regular" className="text-gray-300">
            Consulte os seus cortes de cabelo agendados por dia
          </Text>
        </div>
        <div>
          <InputDate icon={CalendarIcon} />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <div className="flex flex-row gap-3 py-3 px-5 border border-b-0 border-gray-600 rounded-t-lg rounded-b-none">
            <Icon svg={SunHorizon} className="h-5 w-5 fill-yellow-dark" />
            <Text variant="sm-regular" className="text-gray-300 flex-1">Manhã</Text>
            <Text variant="sm-regular" className="text-gray-300">09h-12h</Text>
          </div>
          <div className="border border-gray-600 rounded-b-lg rounded-t-none">
            <div className="flex flex-row p-5 gap-5">
              <Text variant="md-bold" className="text-gray-200">11:00</Text>
              <Text variant="md-regular" className="text-gray-200 flex-1">Ryan Dorwart</Text>
              <Icon svg={Trash} className="h-4 w-4 fill-yellow-base" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <div className="flex flex-row gap-3 py-3 px-5 border border-b-0 border-gray-600 rounded-t-lg rounded-b-none">
            <Icon svg={CloudSun} className="h-5 w-5 fill-yellow-dark" />
            <Text variant="sm-regular" className="text-gray-300 flex-1">Tarde</Text>
            <Text variant="sm-regular" className="text-gray-300">13h-18h</Text>
          </div>
          <div className="flex flex-col border border-gray-600 rounded-b-lg rounded-t-none p-5 gap-5">
            <div className="flex flex-row gap-5">
              <Text variant="md-bold" className="text-gray-200">13:00</Text>
              <Text variant="md-regular" className="text-gray-200 flex-1">Livia Curtis</Text>
              <Icon svg={Trash} className="h-4 w-4 fill-yellow-base" />
            </div>
            <div className="flex flex-row gap-5">
              <Text variant="md-bold" className="text-gray-200">14:00</Text>
              <Text variant="md-regular" className="text-gray-200 flex-1">Randy Calzoni</Text>
              <Icon svg={Trash} className="h-4 w-4 fill-yellow-base" />
            </div>
            <div className="flex flex-row gap-5">
              <Text variant="md-bold" className="text-gray-200">16:00</Text>
              <Text variant="md-regular" className="text-gray-200 flex-1">Marley Franci</Text>
              <Icon svg={Trash} className="h-4 w-4 fill-yellow-base" />
            </div>
            <div className="flex flex-row gap-5">
              <Text variant="md-bold" className="text-gray-200">17:00</Text>
              <Text variant="md-regular" className="text-gray-200 flex-1">Jaylon Korsgaard</Text>
              <Icon svg={Trash} className="h-4 w-4 fill-yellow-base" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div>
          <div className="flex flex-row gap-3 py-3 px-5 border border-b-0 border-gray-600 rounded-t-lg rounded-b-none">
            <Icon svg={MoonStars} className="h-5 w-5 fill-yellow-dark" />
            <Text variant="sm-regular" className="text-gray-300 flex-1">Noite</Text>
            <Text variant="sm-regular" className="text-gray-300">19h-21h</Text>
          </div>
          <div className="flex flex-col border border-gray-600 rounded-b-lg rounded-t-none p-5 gap-5">
            <div className="flex flex-row gap-5">
              <Text variant="md-bold" className="text-gray-200">21:00</Text>
              <Text variant="md-regular" className="text-gray-200 flex-1">Maria Herwitz</Text>
              <Icon svg={Trash} className="h-4 w-4 fill-yellow-base" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}