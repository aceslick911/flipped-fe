import logoUrl from '/favicon.ico'

const gtag = import.meta.env.PUBLIC_ENV__GOOGLE_ANALYTICS;
export default function HeadDefault() {
  return (
    <>
      <link rel="icon" href={logoUrl} />

      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`}
      />
      <script
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gtag}');`,
        }}
      />
    </>
  );
}
