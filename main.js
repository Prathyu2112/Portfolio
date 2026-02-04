document.querySelectorAll(".circle").forEach(circle => {
    const percent =
    circle.getAttribute("data-percent");
    let current = 0;

    const interval = setInterval(() => {
        if (current >= percent) {
            clearInterval(interval);
        }
        else {
            current++;
            circle.Style.background = `conic-gradient(
                #00f7ff ${current * 3.6}deg,
                #0d2a3a ${current * 3.6}deg
            )`;
circle.querySelector("span").innerText = current + "%";
        }  
    }, 20);
});

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