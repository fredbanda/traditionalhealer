import Script from "next/script";

export const GoogleAnalyticsTracking = () => {
  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=AW-16837256959"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() { window.dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'AW-16837256959');
        `}
      </Script>

      {/* Conversion Event */}
      <Script id="conversion-tracking" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
            'send_to': 'AW-16837256959/WZ0TCPSY6ZQaEP_N0Nw-',
            'value': 1.0,
            'currency': 'ZAR',
          });
        `}
      </Script>

      {/* Google Tag Manager */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NWMGYZKP1R" 
      strategy="afterInteractive"
      ></Script>
      <Script>
{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-NWMGYZKP1R');
        `}
      </Script>
    </>
  );
};
