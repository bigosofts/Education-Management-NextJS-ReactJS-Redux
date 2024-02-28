export const OneSignalPush = () => {
  return (
    <>
      <script
        src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
        defer
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.OneSignalDeferred = window.OneSignalDeferred || [];
          OneSignalDeferred.push(function(OneSignal) {
          OneSignal.init({
          appId: "73ba221e-9340-42d2-b8de-f257adc2611e",
          safari_web_id: "web.onesignal.auto.4bf12d4e-2e1c-4e2f-be7e-e4e315c9ca64",
          notifyButton: {
          enable: true,
          },
        });
      });
      `,
        }}
      />
    </>
  );
};

