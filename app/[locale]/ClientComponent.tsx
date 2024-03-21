"use client";
import { useTranslations } from "next-intl";

export const ClientComponent = () => {
    const t = useTranslations("Index");
    return (
        <div>
            <h1>Client: {t("title")}</h1>
        </div>
    );
}
