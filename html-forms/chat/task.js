const chatWidget = document.querySelector('.chat-widget');
const chatInput = document.getElementById('chat-widget__input');


chatWidget.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active');
})

chatInput.addEventListener('keydown', (el) => {
    if (el.key === 'Enter') {
        const message = el.target.value;
        if (message) {
            const date = new Date();
            const hour = date.getHours();
            const minute = date.getMinutes();
            const messages = document.getElementById('chat-widget__messages');
            messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${hour}:${minute}</div>
    <div class="message__text">
      ${message}
    </div>
  </div>
`;
            const answer = Math.floor(Math.random() * robotMessages.length);
            messages.innerHTML += `
          <div class="message">
            <div class="message__time">${hour}:${minute}</div>
            <div class="message__text">
              ${robotMessages[answer]}
            </div>
          </div>
        `;
        }
        el.target.value = '';
    }
});
const robotMessages = [
    'Добрый день!',
    'Какой у вас вопрос?',
    'Повторите'
]