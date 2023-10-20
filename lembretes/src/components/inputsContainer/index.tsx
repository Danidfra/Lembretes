import { Reminder } from "@/pages";
import { useState } from "react";
import Button from "../Button";
import { getDefaultHighWaterMark } from "stream";

interface InputsProps {
    addReminders: (reminder: Reminder) => void;

}

export function Inputs(props: InputsProps) {



    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [data, setData] = useState('');

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement
        props.addReminders({ title, text, data });
        form.reset();
    };

    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();

    const fullDate = year + "-" + month + "-" + day


    return (
        <form onSubmit={handleFormSubmit} className='relative h-full box-border'>
            <h1 className='pt-5 text-xl text-center'>Novo lembrete</h1>
            <fieldset>
                <div className="my-5 border mx-auto border-[2px] w-10/12 justify-center flex items-center rounded-md shadow-md">
                    <div className="h-full p-3 bg-gray-100 w-2/6 pl-4">
                        <label htmlFor="title" className="h-full">Título:</label>
                    </div>
                    <div className="w-full">
                        <input
                            type="text"
                            className="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none"
                            placeholder="Digite aqui o título do lembrete"
                            name="title"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        ></input>
                    </div>
                </div>

                <div className="my-5 border mx-auto border-[2px] w-10/12 justify-center flex items-center rounded-md shadow-md">
                    <div className="h-full p-3 bg-gray-100 w-2/6 pl-4">
                        <label htmlFor="text" className="h-full">Lembrete:</label>
                    </div>
                    <div className="w-full">
                        <input
                            type="text"
                            className="w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none"
                            placeholder="Digite aqui seu lembrete"
                            name="text"
                            id="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            required
                        ></input>
                    </div>
                </div>

                <div className="  my-5 border mx-auto    border-[2px]  w-10/12 justify-center flex items-center rounded-md shadow-md">
                    <div className="h-full p-3 bg-gray-100 w-2/6 pl-4">
                        <label htmlFor="data" className=" h-full ">Data:</label>
                    </div>
                    <div className="w-full">
                        <input type="date" x-model="input3"
                            className="w-full h-12 px-4 py-1 border border-gray-100 text-gray-800 focus:outline-none"
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

