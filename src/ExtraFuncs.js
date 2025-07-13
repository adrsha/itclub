export default function isMobile() {
  // console.log("ـــــــــــــــﮩ٨ـ❤️️ ॐ नमः शिवाय ٨ﮩــــــــــــــ");
  if (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i) || 
    window.innerWidth <= 800 
  ) {
    return true;
  } else {
    return false;
  }
}

export function fullScreenImg(){
    
}
