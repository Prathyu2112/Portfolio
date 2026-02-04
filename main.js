const form =
document.getElementById("contactForm");
const sendBtn =
document.getElementById("sendBtn");

form.addEventListener("submit", function ()
{
  sendBtn.innerText = "sending...";
  sendBtn.disable = true;

  setTimeout(() => {
    alert("Message sent successfully & Thank you for Contacting Me!");
    sendBtn.innerText = "SUBMIT";
    sendBtn.disabled = false;
  }, 1500);
});