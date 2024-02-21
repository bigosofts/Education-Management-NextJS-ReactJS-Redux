export const GoogleTagManagerBeforeBody = () => {
  return (
    <>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-59VS4V8K"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript>
      {/* End Google Tag Manager (noscript) */}
    </>
  );
};
