
const button = document.getElementById("button");
const lightImage = document.getElementById("light-image");

lightImage.src = "https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png";

button.addEventListener("click", toggleLight);

function toggleLight() {
  if (lightImage.src === "https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png") {
    lightImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR25C0t7Ak4B5qWwT4nUMqlbGqF51wUK6xMyw&s";
  } else {
    lightImage.src = "https://i.pinimg.com/originals/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.png";
  }
}