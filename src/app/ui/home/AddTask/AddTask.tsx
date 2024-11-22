"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import AddTaskForm from "../AddTaskForm";

export default function AddTask() {
  const t = useTranslations("home")
  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      <p className="hover:cursor-pointer" onClick={() => setShow(true)}>
        {t("add")}
      </p>
      {
        show &&
        <>
          <div className="fixed w-screen h-screen bg-black bg-opacity-30 top-0 left-0" onClick={() => setShow(false)}></div>
          <AddTaskForm />
        </>
      }
    </>
  );
}
