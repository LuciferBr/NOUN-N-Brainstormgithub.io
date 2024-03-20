$(document).ready(function() {
    $('#send-btn').click(function() {
        sendMessage();
    });

    $('#user-input').keypress(function(e) {
        if (e.which == 13) {
            sendMessage();
        }
    });

    function sendMessage() {
        var userMessage = $('#user-input').val();
        if (userMessage.trim() !== '') {
            appendMessage('You', userMessage);

            // Send user message to Dialogflow for processing
            sendRequestToDialogflow(userMessage);

            // Clear user input
            $('#user-input').val('');
        }
    }

    function appendMessage(sender, message) {
        var chatBox = $('#chat-box');
        chatBox.append('<div><strong>' + sender + ':</strong> ' + message + '</div>');
        chatBox.scrollTop(chatBox.prop('scrollHeight'));
    }

    function sendRequestToDialogflow(userMessage) {
        // Make AJAX request to Dialogflow API
        $.ajax({
            url: 'https://api.dialogflow.com/v1/query?v=20150910',
            method: 'POST',
            contentType: 'application/json',
            headers: {
                'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
            },
            data: JSON.stringify({
                query: userMessage,
                lang: 'en',
                sessionId: 'sessionId'
            }),
            success: function(response) {
                appendMessage('Chatbot', response.result.fulfillment.speech);
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
                appendMessage('Chatbot', 'Sorry, an error occurred. Please try again later.');
            }
        });
    }
});
