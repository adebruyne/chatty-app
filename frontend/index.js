var ws = new WebSocket('ws://localhost:5000');

var messageList = document.querySelector('.message-list');
var newMessage

var renderMessage = function(message) {
    var li = document.createElement('li');
    li.textContent = message;
    messageList.appendChild(li);
};

ws.addEventListener('message', function(event){
    // console.log(event.data);
    renderMessage(event.data);
});