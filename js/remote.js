function openWindow(url){
    var popup = window.open(url);
    return popup;
}
function message(targetWindow, message, origin){
    alert('message sent');
    targetWindow.postMessage(message, origin);
}
function receivemessage(event){
    console.log(event);
}
