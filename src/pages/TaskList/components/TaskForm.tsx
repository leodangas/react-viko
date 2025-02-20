import ErrorMessage from "../../../components/ErrorMessage.tsx";
import React, {SetStateAction, useState} from "react";
import Label from "../../../components/Label.tsx";
import Input from "../../../components/Input.tsx";
import {Task} from "../TaskList.tsx";

interface TaskFormInterface {
    setTasks: React.Dispatch<SetStateAction<Task[]>>
}
export default function TaskForm({setTasks} : TaskFormInterface) {
    const [taskError, setTaskError] = useState<string>('');
    const [taskName, setTaskName] = useState<string>('');

    const submit = (e : React.FormEvent) => {
        e.preventDefault();
        if (taskName.length === 0) {
            setTaskError('Privaloma užpildyti užduoties pavadinimą');
            return;
        }

        setTasks((previousTasks) => [
            ...previousTasks,
            { name: taskName, id: crypto.randomUUID(), completed: false }
        ]);

        setTaskError('');
    }

    return (
        <form className={"form"} onSubmit={submit}>
            <Label text={"Užduoties pavadinimas"} required={true} id={"task_name"} />
            <Input type={"text"} id={"task_name"} className={"form__input"} name={"task_name"} value={taskName} onChange={(e) => setTaskName(e.target.value)} error={!!taskError} />
            <ErrorMessage error={taskError} />
            <button type={"submit"} className={"style-button form__button"}>Kurti užduotį</button>

        </form>
    )
}