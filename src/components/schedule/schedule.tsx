export const Schedule = () => {
  return (
    <div className="flex flex-col gap-6 p-20 bg-gray-700 size-xlg h-full rounded-xl">
      <div className="flex flex-col gap-1">
        <span className="text-2xl/8 font-bold text-gray-100">
          Agende um atendimento
        </span>
        <span className="text-sm/6  text-gray-300">
          Selecione data, horário e informe o nome do cliente para criar o agendamento
        </span>
      </div>
      <form className="flex flex-col gap-8">
        <div id="date" className="flex flex-col gap-2">
          <span className="text-gray-200 font-bold">
            Data
          </span>
          <input className="
            border border-solid border-gray-500 focus:border-yellow-base
            bg-transparent outline-none h-12 rounded-lg text-gray-200 p-3
          "
          />
        </div>
        <div id="time" className="flex flex-col gap-2">
          <span className="text-gray-200 font-bold">
            Horários
          </span>
          <div id="morning">
            <span className="text-gray-300 text-sm">
              Manhã
            </span>
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col items-center justify-center rounded-lg border border-solid border-gray-500 bg-gray-600 h-10">
                <span className="text-gray-200 text-md">09:00</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-solid border-gray-500 bg-gray-600 h-10">
                <span className="text-gray-200 text-md">10:00</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-solid border-gray-500 bg-gray-600 h-10">
                <span className="text-gray-200 text-md">11:00</span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-solid border-gray-500 bg-gray-600 h-10">
                <span className="text-gray-200 text-md">12:00</span>
              </div>
            </div>
          </div>
          <div id="afternoon">
            <span className="text-gray-300 text-sm">
              Tarde
            </span>
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col items-center justify-center rounded-lg border border-solid border-gray-500 bg-gray-600 h-10">
                <span className="text-gray-200 text-md">
                  13:00
                </span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-solid border-gray-500 bg-gray-600 h-10">
                <span className="text-gray-200 text-md">
                  14:00
                </span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-solid border-gray-500 bg-gray-600 h-10">
                <span className="text-gray-200 text-md">
                  15:00
                </span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-solid border-gray-500 bg-gray-600 h-10">
                <span className="text-gray-200 text-md">
                  16:00
                </span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-solid border-gray-500 bg-gray-600 h-10">
                <span className="text-gray-200 text-md">
                  17:00
                </span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-solid border-gray-500 bg-gray-600 h-10">
                <span className="text-gray-200 text-md">
                  18:00
                </span>
              </div>
            </div>
          </div>
          <div id="night">
            <span className="text-gray-300 text-sm">
              Noite
            </span>
            <div className="grid grid-cols-4 gap-2">
              <div className="flex flex-col items-center justify-center rounded-lg border border-solid border-gray-500 bg-gray-600 h-10">
                <span className="text-gray-200 text-md">
                  20:00
                </span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-solid border-gray-500 bg-gray-600 h-10">
                <span className="text-gray-200 text-md">
                  21:00
                </span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-lg border border-solid border-gray-500 bg-gray-600 h-10">
                <span className="text-gray-200 text-md">
                  22:00
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="client" className="flex flex-col gap-2">
          <label className="text-gray-200 font-bold">
            Cliente
          </label>
          <input className="
            border border-solid border-gray-500 focus:border-yellow-base
            bg-transparent outline-none h-12 rounded-lg text-gray-200 p-3
          "
          />
        </div>
        <button
          className="p-4 rounded-2 gap-2 h-14 bg-yellow-base hover:bg-yellow-light cursor-pointer rounded-lg text-gray-900 text-sm font-bold"
        >
          AGENDAR
        </button>
      </form>
    </div>
  )
}