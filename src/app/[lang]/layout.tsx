import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import { RootLayoutProps } from "@/src/types";
import { NextIntlClientProvider } from "next-intl";

export default async function RootLayout({ children, params }: RootLayoutProps) {
    const lang = (await params).lang
    const messages = (await import(`../../../translation/${lang}.json`)).default;

    return (
        <html lang={lang}>
            <body
                className={`${lang == "ar" ? "font-arabic" : "font-english"} min-h-screen bg-backGroundPage w-full flex flex-col justify-between`}
                dir={lang == "ar" ? "rtl" : "ltr"}
            >
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    {children}
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
