import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("home")
  return (
    <footer className="bg-backGroundBox text-textSecondary w-screen">
      <p className="container mx-auto py-4">
        {t("footer")}
      </p>
    </footer>
  );
}
