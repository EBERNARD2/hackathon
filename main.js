// https://api.scryfall.com/bulk-data
// https://api.scryfall.com/cards/random
//
// https://api.scryfall.com/cards/search?q=type%3Acat
//
//
// let user pick type

document.addEventListener("DOMContentLoaded", () => {
  let typeArr = [
    "cat",
    "dog",
    "octopus",
    "beast",
    "otter",
    "fish",
    "goat",
    "hippo",
    "bird",
    "wolf",
    "dinosaur",
  ];
  let type = "cat";
  // document.querySelector("#choices").setAttribute("value", "hi");
  for (let val of typeArr) {
    const option = document.createElement("option");
    option.setAttribute("value", val);
    option.innerHTML = val;
    document.querySelector("#choices").appendChild(option);
  }

  document.querySelector("#choices-button").addEventListener("click", () => {
    const value = document.querySelector("#choices").value;
    fetch(`https://api.scryfall.com/cards/search?q=type%3A${value}`)
      .then((data) => data.json())
      .then((data) => {
        let num = Math.floor(Math.random() * data.data.length);
        let image = data.data[num].image_uris.art_crop;
        let name = data.data[num].name;

        //append a new image
        const petButton = document.querySelector("#pet-image");
        petButton.setAttribute("src", image);
        petButton.setAttribute("width", "250px");
        // test(image, name);
        document.querySelector("#character-name").innerHTML = name;
      });
  });
  // const random = typeArr[Math.floor(Math.random() * typeArr.length)];
  // random number betweeen 0 and data.data.length
  // that is the index pulled of array of cards
  // const petButton = document.querySelector("#pet-image");
  // petButton.setAttribute("src", img);
});

function test(img, name) {
  const image = document.createElement("img");
  const header = document.createElement("h1");
  const body = document.querySelector("body");
  const imagePlace = document.querySelector(".img");
  header.innerHTML = name;
  body.appendChild(header);
  image.setAttribute("alt", name);
  image.setAttribute("src", img);
  image.setAttribute("height", "100px");
  imagePlace.setAttribute("position", "absolute");
  imagePlace.appendChild(image);
  imagePlace.style.left = "1000px";
  imagePlace.style.top = "100px";

  //   let circle = document.getElementById('circle');

  //   onMouseMove(image);
  //   setTimeout(function () {
  //     onMouseMove(image);
  //   }, 20);
  // render that to screen
  // with hover text of name
}
// let mouseMove = document.addEventListener("mousemove", onMouseMove);
// function onMouseMove(e) {
//   image.style.left = e.pageX + "px";
//   image.style.top = e.pageY + "px";
// }

//need the art crop image (image_uris.art_crop) and name
//show in corner of scrren across websites
// some random prop and 'pet for website'
// this app gives each website a mascot

// "twiter" = turtle
// "facebook" = cat
// {'t' : turtle; 'f' : cat} [claric, archer, cat, dog, human]}

// or you pick an animal and each website gives you a diffrent one
// pick animal ==== user input "turtle"
// "twitter" = 16  The 16th  turtle in list
