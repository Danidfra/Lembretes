import { Reminder } from '@/pages';
import React, { useState } from 'react';
import { DELETE_ICON } from '@/lib/consts';

interface ReminderItemProps {
    reminder: Reminder,
    onClick: () => void

}

function ReminderItem({ reminder, onClick }: ReminderItemProps) {
    return (
        <tr className="relative transform scale-100
        text-xs py-1 border-b-2 border-blue-100 cursor-default
        bg-blue-500 bg-opacity-25">
            <td className="pl-5 pr-3 whitespace-no-wrap">
                <div className="text-gray-400">{reminder.data}</div>
            </td>

            <td className="px-2 py-2 whitespace-no-wrap">
                <div className="leading-5 text-gray-500 font-medium">{reminder.title}</div>
                <div className="leading-5 text-gray-900">{reminder.text}</div>
            </td>


            <td>
                <img src={DELETE_ICON} onClick={onClick} className="w-5 bg-blue-200 cursor-pointer relative top-1/2" alt="" />
            </td>
        </tr>
    );
}


export { ReminderItem };
