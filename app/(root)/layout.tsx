export default function LocaleLayout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return (
        <html>
        <body>{children}</body>
        </html>
    );
}
