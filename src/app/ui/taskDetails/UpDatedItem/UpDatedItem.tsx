"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import EditTaskForm from "../EditTaskForm";

export type UpDatedItemProps = {
  id: number
};

export default function UpDatedItem({ id }: UpDatedItemProps) {
  const t = useTranslations("home")
  const [show, setShow] = useState<boolean>(false)

  return (
    <>
      <p className="w-fit bg-textSecondary text-white rounded-md p-2 hover:cursor-pointer capitalize" onClick={() => setShow(true)}>
        {t("edit")}
      </p>
      {
        show &&
        <>
          <div className="fixed w-screen h-screen bg-black bg-opacity-30 top-0 left-0" onClick={() => setShow(false)}></div>
          <EditTaskForm taskId={id} />
        </>
      }
    </>
  );
}
