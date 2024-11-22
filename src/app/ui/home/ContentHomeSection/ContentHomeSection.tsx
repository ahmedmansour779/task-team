"use client";

import useSortedTasks from "@/src/hooks/useSortTasks";
import { useTranslations } from "next-intl";
import OneTask from "../OneTask";

export type ContentHomeSectionProps = {
  filter: string
};
export default function ContentHomeSection({ filter }: ContentHomeSectionProps) {
  const t = useTranslations("home")
  const sortedTasks = useSortedTasks(filter);

  return (
    <section>
      {
        sortedTasks.length > 0 ?
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {
              sortedTasks.map(({ name, description, id }, index) => {
                return <OneTask key={index} name={name} description={description} id={id} />
              })
            }
          </div>
          :
          <p className="">
            {t("msgNoTasks")}
          </p>
      }
    </section>
  );
}
