import React, { useEffect } from 'react';

export default function GoogleAnalytics({ id, partytown = true }) {
  const attrs = partytown ? { type: "text/partytown" } : {};

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", id);
  }, []);

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        {...attrs}
      ></script>
      <script {...attrs}>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            window.dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "${id}");
        `}
      </script>
    </>
  );
}
