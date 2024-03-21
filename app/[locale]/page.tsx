import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { ClientComponent } from "@/app/[locale]/ClientComponent";
import Link from "next/link";

export default function Index({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);
    const t = useTranslations("Index");
    return <div>
        <h1>SSG: {t("title")}</h1>
        <ClientComponent/>

        <div>
            → <Link href={`/${locale}/sub`}>Sub Page</Link>
        </div>
    </div>;
}
