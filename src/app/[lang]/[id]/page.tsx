"use client";

import { getTasks } from "@/src/util";
import { useParams } from "next/navigation";
import ContentTaskDetails from "../../ui/taskDetails/ContentTaskDetails";
import DeleteItem from "../../ui/taskDetails/DeleteItem";
import UpDatedItem from "../../ui/taskDetails/UpDatedItem";

export default function Home() {
    const { id } = useParams()

    const tasks = getTasks()
    const data = tasks.find(task => task.id === +`${id}`)
    console.log(data);

    return (
        <main className="container mx-auto flex flex-col gap-8">
            {data && <ContentTaskDetails data={data} />}
            <div className="flex gap-4">
                {data && <DeleteItem id={data.id} />}
                {data && <UpDatedItem id={data.id} />}
            </div>
        </main>
    )
}
