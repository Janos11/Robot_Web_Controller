const chatbox = document.getElementById("chatbox");
const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const chatContainer = document.getElementById("plumber-chat");
const chatLauncher = document.getElementById("chat-launcher");

let stage = 0;

// Response logic
const responses = {
  greetings: [
    "Hi there! 👋 I'm PlumberBot, your virtual assistant.",
    "Hello! How can I help you today?",
    "Good to see you! Having any plumbing issues?"
  ],
  askIssue: [
    "Can you tell me a bit more? Is it a leak, blockage, installation or something else?",
    "Is the issue in the kitchen, bathroom, or somewhere else?",
    "Thanks for reaching out. What kind of plumbing work do you need help with?"
  ],
  buildTrust: [
    "We’ve helped over 200 customers in your area. You're in safe hands! 🔧",
    "Don’t worry, our certified plumbers can handle it professionally and quickly.",
    "It’s good that you reached out now – plumbing issues only get worse when ignored!"
  ],
  leadPrompt: [
    "If you'd like a callback or want to book a visit, just leave your name, number, and postcode.",
    "You can also message us on WhatsApp 📱 at <strong>+44 7700 900000</strong>, or email <strong>plumber@example.com</strong>.",
    "Prefer SMS or email? We're flexible! Just let us know the best way to contact you."
  ]
};

function addMessage(msg, sender = "bot") {
  const div = document.createElement("div");
  div.className = sender;
  div.innerHTML = msg;
  chatbox.appendChild(div);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function botResponse(userMsg) {
  const text = userMsg.toLowerCase();

  if (stage === 0) {
    if (/hi|hello|good\s?(morning|afternoon|evening)|how are you/.test(text)) {
      addMessage(randomItem(responses.greetings));
      stage = 1;
      setTimeout(() => addMessage(randomItem(responses.askIssue)), 2000);
    } else {
      addMessage("Hey! 👋 Just say 'hi' to get started.");
    }
  } else if (stage === 1) {
    addMessage(randomItem(responses.buildTrust));
    stage = 2;
    setTimeout(() => addMessage(randomItem(responses.leadPrompt)), 2000);
  } else if (stage === 2) {
    if (/(\d{10,11})|@/.test(text)) {
      addMessage("Thanks! We'll get in touch shortly. ✅");
      stage = 3;
    } else {
      addMessage("Can you please share your name and best contact method? 📞");
    }
  } else if (stage === 3) {
    addMessage("Is there anything else I can help you with?");
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userText = input.value.trim();
  if (userText === "") return;

  addMessage(userText, "user");
  input.value = "";
  setTimeout(() => botResponse(userText), 1000);
});

function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Chat show/hide toggle
function toggleChat() {
    const isOpen = chatContainer.classList.contains('visible');

    if (isOpen) {
      // Hide chat
      chatContainer.classList.remove('visible');
      setTimeout(() => {
        chatContainer.style.display = 'none';
        chatLauncher.classList.remove('hidden');
      }, 300);
    } else {
      // Show chat
      chatContainer.style.display = 'flex';
      setTimeout(() => {
        chatContainer.classList.add('visible');
      }, 10);
      chatLauncher.classList.add('hidden');

      // Initial message
      if (stage === 0) {
        setTimeout(() => {
          addMessage("👋 Hello! I'm PlumberBot. Say hi to get started!");
        }, 1000);
      }
    }
}
