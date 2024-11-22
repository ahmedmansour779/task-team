import { getTasks } from "@/src/util";
import { useEffect, useState } from "react";

export default function useSortedTasks(filter: string) {
    const [sortedTasks, setSortedTasks] = useState(getTasks());

    useEffect(() => {
        const data = getTasks();

        if (filter === "fromOldestToNewest") {
            const sortedByDateAsc = data.sort((a, b) => new Date(a.lastUpDate).getTime() - new Date(b.lastUpDate).getTime());
            setSortedTasks(sortedByDateAsc);
        } else if (filter === "fromNewestToOldest") {
            const sortedByDateDesc = data.sort((a, b) => new Date(b.lastUpDate).getTime() - new Date(a.lastUpDate).getTime());
            setSortedTasks(sortedByDateDesc);
        } else if (filter === "alphabetic") {
            const sortedByName = data.sort((a, b) => a.name.localeCompare(b.name));
            setSortedTasks(sortedByName);
        }
    }, [filter]);

    return sortedTasks;
}
