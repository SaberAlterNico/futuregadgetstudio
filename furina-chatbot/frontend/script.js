async function sendMessage() {
  const input = document.getElementById('userInput');
  const chat = document.getElementById('chat');
  const userText = input.value.trim();
  if (!userText) return;

  chat.innerHTML += `<div><strong>You:</strong> ${userText}</div>`;
  input.value = '';

  const res = await fetch('https://YOUR-BACKEND-URL/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: userText })
  });

  const data = await res.json();
  chat.innerHTML += `<div><strong>Furina:</strong> ${data.reply}</div>`;
  chat.scrollTop = chat.scrollHeight;
}