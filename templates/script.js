function sendMessage() {
    var userInput = document.getElementById('user-input').value;
    if (userInput.trim() !== '') {
        var chatMessages = document.getElementById('chat-messages');
        var userMessage = document.createElement('div');
        userMessage.classList.add('message');
        userMessage.classList.add('user');
        userMessage.textContent = userInput;
        chatMessages.appendChild(userMessage);
        document.getElementById('user-input').value = '';
        // Add code here to process the user's message (e.g., send it to a backend for processing)
    }
}
