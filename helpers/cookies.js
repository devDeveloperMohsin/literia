// Function to Set Cookie
export const setCookie = (name,value,days) => {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
};
// End Function to Set Cookie

// Function to Get a Cookie
export const getCookie = (name) => {
  if(typeof document !== 'undefined') {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
  }
  
  return "";
}
// End Function to Get a Cookie


// Function to Delete Cookie
export const deleteCookie = (name) => {  
  if(typeof document !== 'undefined') {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  } 
}
// End Function to Delete Cookie