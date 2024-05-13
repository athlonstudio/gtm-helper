const rem = parseFloat(getComputedStyle(document.documentElement).fontSize);
const cookiesApproved = document.cookie.split('; ').map((cookie) => cookie.includes('ath-std-cc="all"') || cookie.includes('ath-std-cc=all')).includes(true);
const GTMkey = 'GTM-T9QX3Z7M';
const GAkey = 'G-W5FZ9V2JRG';

function enableGTM() {
  window['dataLayer'] = window['dataLayer']||[];
  window['dataLayer'].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
  const location = document.getElementsByTagName('script')[0],elem=document.createElement('script'),dl='dataLayer'!='dataLayer'?'&l='+'dataLayer':'';
  elem.async=true;elem.src='https://www.googletagmanager.com/gtm.js?id='+GTMkey+dl;
  location.parentNode.insertBefore(elem,location);
}

function enableGA(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());
  gtag('event', 'conversion_event_page_view_1', {});
  gtag('config', GAkey);
}


function initiateCookie() {
  const exipiryDate = new Date();
  const monthInMilliseconds = 30 * 86400000;
  
  exipiryDate.setTime(exipiryDate.getTime() + (monthInMilliseconds * 3));
  exipiryDate.toUTCString();
  document.cookie = `ath-std-cc=all; expires=${exipiryDate}`;
  document.querySelector('[fs-cc="banner"]').remove();
  
  enableGTM();
  enableGA();
}

document.addEventListener("DOMContentLoaded", () => {
  if(!cookiesApproved){
      document.querySelector('[fs-cc="banner"]').classList.toggle('hide');
      document.querySelector('[fs-cc="close"]').addEventListener('click', initiateCookie);
  } else {
      enableGTM();
      enableGA();
    document.querySelector('[fs-cc="banner"]').remove();
  }

});
