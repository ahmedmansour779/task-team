import { Task } from "@/src/types";
import { useTranslations } from "next-intl";
import Details from "../Details";

export default function ContentTaskDetails({ data }: { data: Task }) {
  const t = useTranslations("home")

  return (
    <div className="w-full flex flex-col gap-2">
      <Details name={t("taskName")} value={data.name} />
      <Details name={t("taskDescription")} value={data.description} />
      <Details name={t("lastUpdate")} value={data.lastUpDate} />
      <Details name={t("id")} value={`${data.id}`} />
    </div>
  );
}
