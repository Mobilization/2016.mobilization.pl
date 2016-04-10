function createCookie(name, value, days) {
  var date = new Date();
  date.setTime(date.getTime() + (days*24*60*60*1000));
  var expires = "; expires=" + date.toGMTString();
  document.cookie = name+"="+value+expires+"; path=/";
}
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function checkCookies() {
  if(readCookie('cookies_accepted') != 'T') {
    var message_container = document.createElement('div');
    message_container.id = 'cookies-message-container';
    var language = window.navigator.userLanguage || window.navigator.language,
        $cookieCode = $('<div id="cookies-message" style="padding: 10px 0px; font-size: 14px; line-height: 22px; border-bottom: 1px solid #D3D0D0; opacity: 0.8; text-align: center; position: fixed; bottom: 0px; background-color: #EFEFEF; width: 100%; z-index: 9999;"></div>'),
        cookieText = (language == 'pl' || language == 'pl-PL')
            ? 'Ta strona używa ciasteczek (cookies), dzięki którym nasz serwis może działać lepiej. <a href="http://pl.wikipedia.org/wiki/HTTP_cookie" target="_blank" style="color: #428bca">Dowiedz się więcej</a><a href="javascript:closeCookiesWindow();" id="accept-cookies-checkbox" name="accept-cookies" style="background-color: #444444; padding: 5px 10px; color: #FFF; border-radius: 4px; -moz-border-radius: 4px; -webkit-border-radius: 4px; display: inline-block; margin-left: 10px; text-decoration: none; cursor: pointer;">Rozumiem</a>'
            : 'This website is using cookies to improve your experience. <a href="http://en.wikipedia.org/wiki/HTTP_cookie" target="_blank" style="color: #428bca">Find out more</a><a href="javascript:closeCookiesWindow();" id="accept-cookies-checkbox" name="accept-cookies" style="background-color: #444444; padding: 5px 10px; color: #FFF; border-radius: 4px; -moz-border-radius: 4px; -webkit-border-radius: 4px; display: inline-block; margin-left: 10px; text-decoration: none; cursor: pointer;">I understand</a>';
    $cookieCode.html(cookieText);
    $(message_container).html($cookieCode);
    document.body.appendChild(message_container);
  }
}

function closeCookiesWindow() {
  createCookie('cookies_accepted', 'T', 365);
  document.getElementById('cookies-message-container').removeChild(document.getElementById('cookies-message'));
}

$(document).ready(checkCookies);
