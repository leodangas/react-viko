import {useState} from "react";
import Wrapper from "../../components/Wrapper.tsx";
import GoBack from "../../components/GoBack.tsx";
import TaskForm from "./components/TaskForm.tsx";
import TaskItem from "./components/TaskItem.tsx";

export interface Task {
    name: string;
    id: string;
    completed: boolean;
}

export default function TaskList() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const toggleTaskStatus = (id: string) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id: string) => {
        setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    };

    return (
        <main className={"page-taskList"}>
            <Wrapper>
                <GoBack />
                <h1 className={"style-heading"}>Užduočių sąrašas</h1>
                <div className={"grid"}>
                    <div className={"tasks"}>
                        {tasks.length === 0 ?
                            <div className={"empty"}>Sukurtų užduočių nėra</div>
                            :
                            tasks.map(task =>
                                <TaskItem
                                    task={task}
                                    onToggleStatus={toggleTaskStatus}
                                    onDelete={deleteTask}
                                />
                            )
                        }
                    </div>
                    <TaskForm setTasks={setTasks} />

                </div>
            </Wrapper>
        </main>
    )
}