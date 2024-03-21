import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n";
import { NextIntlClientProvider, useMessages } from "next-intl";

// Note: How to prevent "Error: Page "/[locale]/page" is missing param "/favicon.ico" in "generateStaticParams()", which is required with "output: export" config." error?
// -> put favicon.ico in public folder

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
                                         children,
                                         params: { locale },
                                     }: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    unstable_setRequestLocale(locale);
    const messages = useMessages();
    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider></body>
        </html>
    );
}
