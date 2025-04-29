const jokeBtn = document.getElementById("getjoke");
const shareBtn = document.getElementById("sharebutn");
const jokeText = document.getElementById("jokeimp");

let currentJoke = "";

jokeBtn.addEventListener("click", getJoke);
shareBtn.addEventListener("click", shareJoke);

async function getJoke() {
  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const data = await response.json();
    currentJoke = `${data.setup} - ${data.punchline}`;
    jokeText.textContent = currentJoke;
    // shareBtn.style.display = "inline";
  } catch (error) {
    jokeText.textContent = "Oops! Something went wrong.";
    console.error(error);
  }
}
function shareJoke() {
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
    currentJoke
  )}`;
  window.open(whatsappUrl, "_blank");
}
