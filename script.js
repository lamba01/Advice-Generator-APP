const contentElement = document.getElementById("content");
const generateButton = document.getElementById("generateButton");
const slipid = document.getElementById("adviceid")

// Function to fetch and display a new advice
function fetchNewAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      const advice = data.slip.advice;
      contentElement.textContent = "\"" + advice + "\"";
      const id = data.slip.id;
      slipid.textContent = "advice #" + id
    })
    .catch((error) => {
      console.log("Error fetching data:", error);
    });
}

// Display initial advice on page load
window.addEventListener("load", fetchNewAdvice);

// Event listener for the button click
generateButton.addEventListener("click", fetchNewAdvice);
