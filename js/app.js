const container = document.querySelector(".container")
const coffees = [
  { name: "perspiciatis", image: "images/coffee1.jpg" },
  { name: "voluptatem", image: "images/coffee2.jpg" },
  { name: "explicabo", image: "images/coffee3.jpg" },
  { name: "rchitecto", image: "images/coffee4.jpg" },
  { name: "beatae", image: "images/coffee5.jpg" },
  { name: "vitae", image: "images/coffee6.jpg" },
  { name: "inventore", image: "images/coffee7.jpg" },
  { name: "beritatis", image: "images/coffee8.jpg" },
  { name: "accusantium", image: "images/coffee9.jpg" },
]
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
      <div class="card">
        <img class="card--avatar" src=${image} />
        <h1 class="card--title">${name}</h1>
        <a class="card--link" href="#">Taste</a>
      </div>
      `)
  );
  container.innerHTML = output;
}
document.addEventListener("DOMContentLoaded", showCoffees)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}