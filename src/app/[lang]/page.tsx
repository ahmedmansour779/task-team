"use client";

import { useState } from "react";
import ContentHomeSection from "../ui/home/ContentHomeSection";
import HeaderSection from "../ui/home/HeaderSection";

export default function Home() {
    const [filterValue, setFilterValue] = useState<string>("")
    return (
        <main className="container mx-auto min-h-full flex flex-col gap-4">
            <HeaderSection setFilterValue={setFilterValue} />
            <ContentHomeSection filter={filterValue} />
        </main>
    )
}
