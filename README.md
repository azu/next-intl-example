# Next.js App Router + Static Exports(`output: "export"`) + i18n([next-intl](https://github.com/amannn/next-intl))

This is an example of how to use Next.js App Router with Static Exports and i18n.
Full static i18n website with Next.js App Router and Static Exports.



Structure:

```text
app/
 - [locale]
    - page.tsx
    - sub/
      - page.tsx
messages/
  - en.json
  - de.json
  - ja.json
```

Output: `npm run build`

```text
out/
  - en/
    - index.html
    - sub/
      - index.html
  - de/
    - index.html
    - sub/
      - index.html
  - ja/
    - index.html
    - sub/
      - index.html
  - en.html
  - de.html
  - ja.html
```

As a result, user can access the page with the following URL:

- `https://your-site.example/en/`
- `https://your-site.example/de/`
- `https://your-site.example/ja/`

## Troubleshooting

### `Error: Page "/[locale]/page" is missing param "/favicon.ico" in "generateStaticParams()", which is required with "output: export" config.` on `npm run dev`

You need to put `favicon.ico` in `public/` directory.

## Getting Started

First, run the development server:

```bash
npm ci 
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
