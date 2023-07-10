/*document.getElementById("btn-2").onclick = changeColor;
document.getElementById("btn-3").addEventListener("click", changeBackground);
document.getElementById("btn-1").onclick = changeContent;
// Function to generate a random HEX color
function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }
  
  // Function to generate a random RGB color
  function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  // Function to change the content of the target element
  function changeContent() {
    document.getElementById("text").innerHTML = "A random quote";
  }
  
  // Function to change the color of the target element
  function changeColor() {
    const target = document.getElementById("text");
    target.style.color = getRandomColor();
  }
  
  // Function to change the background color of the target element
  function changeBackground() {
    const target = document.getElementById("text");
    target.style.backgroundColor = getRandomRGB();
  }*/
         // <p id="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nisi debitis enim tempora rerum provident magnam velit corporis! Ipsam voluptatum commodi consectetur molestias sit quod alias ex eius veritatis. Dicta.</p>

       //<button id="btn-1">Change content</button>
       //<button id="btn-2">Change color</button>
       //<button id="btn-3">Change background</button>
  const circleContainer = document.getElementById("circle-container");
  document.body.addEventListener("click", function(event) {
    const circle = document.createElement("div");
    circle.style.width = "50px";
    circle.style.height = "50px";
    circle.style.borderRadius = "50%";
    circle.style.backgroundColor = "red";
    circle.style.position = "absolute";
    circle.style.top = `${event.clientY - 25}px`;
    circle.style.left = `${event.clientX - 25}px`;
    circleContainer.appendChild(circle);
  });