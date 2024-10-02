const container = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const newImage = document.createElement("img");
  newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

  const paragraph = document.createElement("p");
  paragraph.innerText = i;

  imgContainer.append(newImage, paragraph);
  container.append(imgContainer);
}

//selecting the 3rd image
const img3 = document.querySelector("body > div > div:nth-child(3)");
img3.remove();

// removing the h1 heading
// const h1 = document.querySelector("h1");
// h1.remove();

// const h2 = document.createElement("h2");
// h2.innerText = "Remove element";

// document.body.append(h2);
