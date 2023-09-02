const mssg = document.querySelector('.mssg')
const timestamp = document.querySelector('.time')
const form = document.querySelector("form");
const messageInput = document.querySelector("#mssgInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let newMessage = messageInput.value;
  postNewMessage(newMessage);
  messageInput.value = "";
});

// Periodically check for new messages
setInterval(() => {
  const storedMessage = getCurrentMessage();
  console.log(storedMessage);
  if (storedMessage) {
    const message = storedMessage;
    // Display the message in the chat interface
    displayMessage(message);
  }
}, 1000); // Check every second (adjust as needed)

function displayMessage(message) {
  let date = new Date();
  const time = date.toLocaleTimeString();
  if (message !== null) {
    mssg.innerHTML = `<p>${message} </p>`
    timestamp.innerHTML = `<span>${time}</span>`
  }

}

setInterval(() => {
  clearPreviousMessages();
}, 10000);

function postNewMessage(message) {
  localStorage.setItem("currentMessage", message);
}

function getCurrentMessage() {
  return localStorage.getItem("currentMessage");
}

function clearPreviousMessages() {
  localStorage.removeItem("currentMessage");
}
