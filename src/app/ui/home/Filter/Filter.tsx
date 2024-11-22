"use client";

import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction, useState } from "react";

export default function Filter({ setFilterValue }: { setFilterValue: Dispatch<SetStateAction<string>> }) {
  const t = useTranslations("home")
  const [show, setShow] = useState<boolean>(false)
  return (
    <div className="relative w-fit">
      <p className="hover:cursor-pointer" onClick={() => setShow(!show)}>
        {t("filter")}
      </p>
      <div className={`absolute overflow-hidden -left-20 bg-backGroundBox text-white rounded-md w-48 ${show ? "h-fit p-2" : "h-0 p-0"} transition-all duration-300 flex flex-col gap-1`}>
        <p className="hover:cursor-pointer" onClick={() => setFilterValue("fromNewestToOldest")}>
          {t("fromNewestToOldest")}
        </p>
        <p className="hover:cursor-pointer" onClick={() => setFilterValue("fromOldestToNewest")}>
          {t("fromOldestToNewest")}
        </p>
        <p className="hover:cursor-pointer" onClick={() => setFilterValue("alphabetic")}>
          {t("alphabetic")}
        </p>
      </div>
    </div>
  );
}
