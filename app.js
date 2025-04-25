const bots = {
    scienceBot: {
        greetings: "سڵاو! من بۆتی زانستم. پرسیارەکانت پەیوەندیم پێ بکە.",
        respond: function (question) {
            if (question.includes("زووترین")) return "زووترین گەرد، ڕووناکیە!";
            if (question.includes("کۆمەڵگە")) return "کۆمەڵگە دەچێتە ناو ئازموونەکان.";
            return "تکایە پرسیارێکی زانستیتر بکە.";
        }
    },
    animeBot: {
        greetings: "سڵاو! دڵسۆزی خەیاڵم.",
        respond: function (question) {
            if (question.includes("ناڕەحەتی")) return "هەرگیز تەنهات نەماوە!";
            if (question.includes("هەڵسوکەوت")) return "هەڵسوکەوت بەهێزی دڵە.";
            return "چیرۆکی تر دەتەوێ؟ پرسیار بکە.";
        }
    }
};

const chatBox = document.getElementById('chat-box');
const botSelector = document.getElementById('bot');
const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send');

function addMessage(sender, text) {
    const div = document.createElement('div');
    div.classList.add('message', sender);
    div.textContent = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

sendButton.addEventListener('click', () => {
    const text = messageInput.value.trim();
    if (!text) return;

    const botName = botSelector.value;
    const bot = bots[botName];

    addMessage('user', text);
    const botReply = bot.respond(text);
    setTimeout(() => {
        addMessage('bot', botReply);
    }, 500);

    messageInput.value = '';
});

botSelector.addEventListener('change', () => {
    const botName = botSelector.value;
    const bot = bots[botName];
    addMessage('bot', bot.greetings);
});

addMessage('bot', bots[botSelector.value].greetings);

// Image upload preview
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');

imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (file && file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="وێنە">`;
        };
        reader.readAsDataURL(file);
    }
});
