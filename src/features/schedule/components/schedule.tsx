import { Button, DivSection, InputText, Text, TimeSection } from "../../../components"
import ClientIcon from "../../../assets/icons/client.svg?react"

const morningTimes = [
  { id: 1, value: "09:00" },
  { id: 2, value: "10:00" },
  { id: 3, value: "11:00" },
  { id: 4, value: "12:00" }
]

const afternoonTimes = [
  { id: 5, value: "13:00" },
  { id: 6, value: "14:00" },
  { id: 7, value: "15:00" },
  { id: 8, value: "16:00" },
  { id: 9, value: "17:00" },
  { id: 10, value: "18:00" },
]

const nightTimes = [
  { id: 11, value: "19:00" },
  { id: 12, value: "20:00" },
  { id: 13, value: "21:00" },
]

export const Schedule = () => {
  return (
    <div className="flex flex-col gap-6 p-20 bg-gray-700 size-xlg h-full rounded-xl">
      <div className="flex flex-col gap-1">
        <Text variant="2xl-bold">
          Agende um atendimento
        </Text>
        <Text variant="sm-regular" className="text-gray-300">
          Selecione data, horário e informe o nome do cliente para criar o agendamento
        </Text>
      </div>
      <form className="flex flex-col gap-8">
        <DivSection sectionTitle="Data">
          <input className="
            border border-solid border-gray-500 focus:border-yellow-base
            bg-transparent outline-none h-12 rounded-lg text-gray-200 p-3
          "
          />
        </DivSection>
        <DivSection sectionTitle="Horários">
          <TimeSection label="Manhã" times={morningTimes} />
          <TimeSection label="Tarde" times={afternoonTimes} />
          <TimeSection label="Noite" times={nightTimes} />
        </DivSection>
        <div id="client" className="flex flex-col gap-2">
          <label className="text-gray-200 font-bold">Cliente</label>
          <InputText required autoFocus icon={ClientIcon} />
        </div>
        <Button>AGENDAR</Button>
      </form>
    </div>
  )
}