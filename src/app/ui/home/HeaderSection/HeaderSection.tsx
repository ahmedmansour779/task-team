import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction } from "react";
import AddTask from "../AddTask";
import Filter from "../Filter";

export default function HeaderSection({ setFilterValue }: { setFilterValue: Dispatch<SetStateAction<string>> }) {
  const t = useTranslations("home")
  return (
    <div className="w-full flex justify-between">
      <p className="capitalize text-2xl">
        {t("myTasks")}
      </p>
      <div className="flex justify-between gap-4">
        <Filter setFilterValue={setFilterValue} />
        <AddTask />
      </div>
    </div>
  );
}
