import React, { useState, useEffect } from 'react';
import { Inputs } from '@/components/inputsContainer'
import Button from '@/components/Button/index'
import { ReminderItem } from '@/components/reminder'

export interface Reminder {
  id: string;
  title: string;
  text: string;
  data: Date;
}

export function generateUniqueId(): string {
  const randomValue: number = Math.floor(Math.random() * 1000000);

  const timestamp: number = new Date().getTime();
  const uniqueId: string = `${timestamp}-${randomValue}`;

  return uniqueId;
}
export default function Home() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  function addReminder(reminder: Reminder) {
    const newReminder: Reminder = { ...reminder, id: generateUniqueId() }; // Gere um ID aleatório
    setReminders((reminders) => [...reminders, newReminder]);
  }

  function handleOnRemove(id: string) {
    const newList = reminders.filter((reminder) => reminder.id !== id);
    setReminders(newList);
  }

  useEffect(() => {
    const storedReminders = localStorage.getItem('reminders');
    if (storedReminders) {
      setReminders(JSON.parse(storedReminders));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders));
  }, [reminders]);

  const sortedReminders = [...reminders].sort((a, b) => b.data.getTime() - a.data.getTime());

  const groupedReminders: { [key: string]: Reminder[] } = {};

  sortedReminders.forEach((reminder) => {
    const dateKey = reminder.data.toDateString();

    if (!groupedReminders[dateKey]) {
      groupedReminders[dateKey] = [];
    }

    groupedReminders[dateKey].push(reminder);
  });
  const reversedGroupedReminders: { [key: string]: Reminder[] } = {};
  const dateKeys = Object.keys(groupedReminders).reverse();

  dateKeys.forEach((dateKey) => {
    reversedGroupedReminders[dateKey] = groupedReminders[dateKey];
  });

  return (
    <div className="container mx-auto py-10 flex justify-evenly items-center h-screen" id="test">
      <div className="border border-white border-opacity-25 rounded-2xl bg-white text-black shadow-xl backdrop-blur-2xl w-3/6 h-3/5">
        <Inputs addReminders={addReminder} />
      </div>
      <div className="w-4/12 pl-4  h-full flex flex-col">
        <div className="bg-white text-sm text-gray-500 font-bold px-5 py-2 shadow border-b border-gray-300">
          <span className="text-black">Lista de Lembretes</span>
        </div>
        <div className="w-full h-full overflow-auto shadow bg-white" id="journal-scroll">
          {dateKeys.map((dateKey) => (
            <div key={dateKey}>
              <h2 className="text-gray-600">{dateKey}</h2> {/* Aplica a classe aqui */}
              <table className="w-full">
                <tbody>
                  {reversedGroupedReminders[dateKey].map((reminder) => (
                    <ReminderItem
                      onClick={() => handleOnRemove(reminder.id)}
                      key={reminder.id}
                      reminder={reminder}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}