import { FormEvent } from "react";
import { Task } from "../types";

export function getTasks(): Task[] | [] {
    if (typeof window !== "undefined") {
        const storedTasks = localStorage.getItem("tasks");
        return storedTasks ? JSON.parse(storedTasks) : [];
    }
    return [];
}

function getDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const day = now.getDate().toString().padStart(2, '0');

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

export function handleSubmitAdd(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const formObj = Object.fromEntries(formData.entries());
    const data = getTasks()
    const lastIndex = data.length > 0 ? data[data.length - 1].id : 0
    const date = getDate()
    const upDatedObj = { ...formObj, id: lastIndex + 1, lastUpDate: date }
    const upDatedData = [...data, upDatedObj]
    localStorage.setItem("tasks", JSON.stringify(upDatedData));
    window.location.reload();
}

export function handleSubmitEdit(e: FormEvent<HTMLFormElement>, taskId: number) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget);
    const formObj = Object.fromEntries(formData.entries());
    const date = getDate()
    const tasks = getTasks()
    formObj.lastUpDate = date
    const updatedTasks = tasks.map(task =>
        task.id === taskId ? { ...task, ...formObj } : task
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    window.location.reload();
}

export function deleteTask(taskId: number) {
    const tasks = getTasks()
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    console.log(filteredTasks);
    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
    window.history.back()
}

