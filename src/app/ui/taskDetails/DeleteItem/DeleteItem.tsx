import { deleteTask } from "@/src/util";
import { useTranslations } from "next-intl";
import { useState } from "react";

export type DeleteItemProps = {
  id: number
};
export default function DeleteItem({ id }: DeleteItemProps) {
  const [show, setShow] = useState<boolean>(false)
  const t = useTranslations("home")
  return (
    <>
      <p onClick={() => setShow(true)} className="w-fit bg-red-600 text-white rounded-md p-2 hover:cursor-pointer capitalize">
        {t("delete")}
      </p>
      {
        show &&
        <>
          <div className="fixed w-screen h-screen bg-black bg-opacity-30 top-0 left-0" onClick={() => setShow(false)}></div>
          <div className="absolute w-fit h-fit bg-white rounded-lg p-4 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col gap-4">
            <p>
              {t("confirmDeleteMsg")}
            </p>
            <div className="flex gap-2">
              <p className="bg-textSecondary text-white cursor-pointer rounded-md px-2 py-1" onClick={() => deleteTask(id)}>
                {t("yes")}
              </p>
              <p className="bg-textSecondary text-white cursor-pointer rounded-md px-2 py-1" onClick={() => setShow(false)}>
                {t("no")}
              </p>
            </div>
          </div>
        </>
      }
    </>
  );
}
