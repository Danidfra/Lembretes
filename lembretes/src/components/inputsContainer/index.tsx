import { Reminder } from "@/pages";
import { useState } from "react";
import Button from "../Button";
import { generateUniqueId } from "@/pages/index";

interface InputsProps {
    addReminders: (reminder: Reminder) => void;
}

export function Inputs(props: InputsProps) {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [data, setData] = useState('');

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const id = generateUniqueId();
        const date = new Date(data);
        const newReminder: Reminder = { id, title, text, data: date };

        props.addReminders(newReminder);
        form.reset();
    };


    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    const fullDate = year + "-" + month + "-" + day


    return (
        <form onSubmit={handleFormSubmit} className='relative h-full box-border max-md:pb-10'>
            <h1 className='pt-9 pb-1 text-xl text-center max-md:pt-5 max-md:pb-0'>Novo lembrete</h1>
            <fieldset>
                <div className="my-5 border mx-auto border-[2px] w-10/12 justify-center flex items-center rounded-md shadow-md">
                    <div className="h-full p-3 bg-gray-100 w-2/6 pl-4 max-md:p-1">
                        <label htmlFor="title" className="h-full">Título:</label>
                    </div>
                    <div className="w-full">
                        <input
                            type="text"
                            className="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none max-md:tracking-tighter max-md:px-1 max-md:h-8"
                            placeholder="Título do lembrete"
                            name="title"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        ></input>
                    </div>
                </div>

                <div className="my-5 border mx-auto border-[2px] w-10/12 justify-center flex items-center rounded-md shadow-md">
                    <div className="h-full p-3 bg-gray-100 w-2/6 pl-4 max-md:p-1">
                        <label htmlFor="text" className="h-full">Lembrete:</label>
                    </div>
                    <div className="w-full">
                        <input
                            type="text"
                            className="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none max-md:tracking-tighter max-md:px-1 max-md:h-8"
                            placeholder="Descrição do  lembrete"
                            name="text"
                            id="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            required
                        ></input>
                    </div>
                </div>

                <div className="  my-5 border mx-auto    border-[2px]  w-10/12 justify-center flex items-center rounded-md shadow-md">
                    <div className="h-full p-3 bg-gray-100 w-2/6 pl-4 max-md:p-1">
                        <label htmlFor="data" className=" h-full ">Data:</label>
                    </div>
                    <div className="w-full">
                        <input type="date" x-model="input3"
                            className="w-full h-12 px-4 py-1 border border-gray-100 text-gray-800 focus:outline-none max-md:tracking-tighter max-md:px-1 max-md:h-8"
                            name="data"
                            id="data"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                            min={fullDate}
                            required></input>
                    </div>
                </div >
            </fieldset>
            <Button />
        </form>
    );
}

