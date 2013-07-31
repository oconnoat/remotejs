function openWindow(url){
    var popup = window.open(url, 'width=400,height=200');
    return popup;
}
function message(targetWindow, message, origin){
    targetWindow.postMessage(message, origin);

}
function sendstep(popup, step){
    var notes = step.srcElement.getElementsByClassName('notes')[0];
    console.log(notes.innerHTML);
    message(popup,notes.innerHTML, document.URL );
}
function receivemessage(event){
    document.getElementById('notes').innerHTML = event.data;
    console.log(event);
}
