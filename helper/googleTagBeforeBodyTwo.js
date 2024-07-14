export const GoogleTagManagerBeforeBodyTwo = () => {
  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NPVSWKDK" height="0" width="0" style="display:none;visibility:hidden"></iframe>
    `,
        }}
      />

      {/* End Google Tag Manager (noscript) */}
    </>
  );
};
