function openWindow(url){
    var popup = window.open(url, 'width=400,height=200');
    return popup;
}
function message(targetWindow, message, origin){
    targetWindow.postMessage(message, origin);

}
function receivemessage(event){
    document.getElementById('notes').innerHTML = 'event';
    console.log(event);
}
