import React from "react"
import Script from 'next/script'

const Chatbot = () => {
  return (
    <>
      <Script>
        window.addEventListener('mouseover', initLandbot, { once: true });
        window.addEventListener('touchstart', initLandbot, { once: true });
        var myLandbot;
        function initLandbot() {
          if (!myLandbot) {
            var s = document.createElement('script');s.type = 'text/javascript';s.async = true;
            s.addEventListener('load', function() {
              myLandbot = new Landbot.Popup({
                configUrl: 'https://chats.landbot.io/v3/H-1228722-I7RHH311Y3TAH6H3/index.json',
              });
            });
            s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.js';
            var x = document.getElementsByTagName('script')[0];
            x.parentNode.insertBefore(s, x);
          }
        }
      </Script>
    </>
  )
}

export default Chatbot
