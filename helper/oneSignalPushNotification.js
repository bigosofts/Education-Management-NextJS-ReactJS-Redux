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
            promptOptions: {
              slidedown: {
                prompts: [
                  {
                    type: "push", // current types are "push" & "category"
                    autoPrompt: true,
                    text: {
                      /* limited to 90 characters */
                      actionMessage: "যেহেতু প্রতিনিয়ত বিভিন্ন ক্লাসের আপডেট আসতে থাকে, তাই এটি Allow করে রাখুন।",
                      /* acceptButton limited to 15 characters */
                      acceptButton: "Allow",
                      /* cancelButton limited to 15 characters */
                      cancelButton: "Cancel"
                    },
                    delay: {
                      pageViews: 1,
                      timeDelay: 20
                    }
                  }
                ]
              }
            },
          appId: "73ba221e-9340-42d2-b8de-f257adc2611e",
          safari_web_id: "web.onesignal.auto.4bf12d4e-2e1c-4e2f-be7e-e4e315c9ca64",
          notifyButton: {
          enable: false,
          },
        });
      });
      `,
        }}
      />
    </>
  );
};
