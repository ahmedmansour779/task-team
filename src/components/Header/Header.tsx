import { useTranslations } from "next-intl";
import Link from "next/link";
import ChangeLang from "../ChangeLang";

export default function Header() {
  const t = useTranslations("home")
  return (
    <header className="bg-backGroundBox w-full">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <Link href="/" className="text-textSecondary capitalize text-3xl">
          {t("title")}
        </Link>
        <ChangeLang />
      </div>
    </header>
  );
}
