import {Task} from "../TaskList.tsx";

interface TaskItemInterface {
    task: Task;
    onToggleStatus: (id: string) => void;
    onDelete: (id: string) => void;
}

export default function TaskItem({task, onToggleStatus, onDelete } : TaskItemInterface) {
    return (
        <div className={"task-item"}>
            <div className={`task-item__name ${task.completed ? 'completed' : ''}`}>{task.name}</div>
            <button
                type={"button"} className={`status-button ${task.completed ? 'completed' : ''}`}
                onClick={() => onToggleStatus(task.id)}
            >
                {task.completed ?
                    <img src={"/images/close-x.svg"} />
                    :
                    <img src={"/images/checkmark.svg"} />
                }
            </button>
            <button
                type={"button"}
                className={"delete-button"}
                onClick={() => onDelete(task.id)}
            >
                <img src={"/images/delete-button.svg"} />
            </button>
        </div>
    )
}