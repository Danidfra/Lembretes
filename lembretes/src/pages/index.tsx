import React, { useState } from 'react';
import { Inputs } from '@/components/inputsContainer'
import Button from '@/components/Button/index'
import { ReminderItem } from '@/components/reminder'

export interface Reminder {
  title: string;
  text: string;
  data: string;
}

export default function Home() {

  // function Delete

  const [reminders, setReminders] = useState<Reminder[]>([]);

  function addReminder(reminder: Reminder) {
    setReminders((reminders) => [...reminders, reminder]);
  }

  function handleOnRemove(parametro: Reminder) {
    // setReminders((reminders) => [...reminders, reminder]);
    let newList = reminders.filter(x => x.title != parametro.title)
    setReminders(newList)
  }

  return (

    <div className="container mx-auto py-10 flex justify-evenly	 items-center h-screen" id="test">

      <div className="border border-white border-opacity-25 rounded-2xl bg-white text-black shadow-xl backdrop-blur-2xl w-3/6 h-3/5">

        <Inputs addReminders={addReminder} />

      </div>

      <div className="w-4/12 pl-4  h-full flex flex-col">
        <div className="bg-white text-sm text-gray-500 font-bold px-5 py-2 shadow border-b border-gray-300">
          Lista de Lembretes
        </div>

        <div className="w-full h-full overflow-auto shadow bg-white" id="journal-scroll">

          <table className="w-full">
            <tbody className="">
              {reminders.map((reminder, index) => (
                <ReminderItem onClick={() => handleOnRemove(reminder)} key={index} reminder={reminder} />
              ))}
            </tbody>
          </table>
        </div>


      </div>
    </div>

  )
}
