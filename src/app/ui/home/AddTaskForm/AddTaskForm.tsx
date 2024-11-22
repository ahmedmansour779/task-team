import { handleSubmitAdd } from "@/src/util";
import { useTranslations } from "next-intl";
import BtnSubmit from "../BtnSubmit";
import Input from "../Input";

export default function AddTaskForm() {
  const t = useTranslations("home")

  return (
    <form
      onSubmit={(e) => handleSubmitAdd(e)}
      className="absolute w-fit h-fit bg-white rounded-lg p-4 z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex flex-col gap-4">
      <p className="uppercase w-full text-center">
        {t("add")}
      </p>
      <div className="w-full flex flex-col gap-2 items-center">
        <Input name="name" title={t("taskName")} />
        <Input name="description" title={t("taskDescription")} />
        <BtnSubmit name={t("addBtn")} />
      </div>
    </form>
  );
}
