export const setCookie = (cookieName: string, cookieValue: string, expireDays: number) => {
    const expireDate: Date = new Date();
    expireDate.setTime(expireDate.getTime() + (expireDays*24*60*60*1000));
    document.cookie = `${cookieName}=${cookieValue};expires=${expireDate};path=/`;
}

export const getCookie = (cookieName: string): string => {
    let name = cookieName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let allCookies = decodedCookie.split(';');
    for(let i = 0; i <allCookies.length; i++) {
      let cookie = allCookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "null";
}

export const isCookieSet = (cookieName: string): boolean => {
    let cookie = getCookie(cookieName);
    if(cookie !== "null" ) {
        return true;
    } else {
        return false;
    }

}