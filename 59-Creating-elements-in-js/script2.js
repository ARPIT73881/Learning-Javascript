const container = document.querySelector(".container");

// const imgContainer = document.createElement("div");
// imgContainer.classList.add("img-container");

// const newImage = document.createElement("img");
// newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`;

// const para = document.createElement("p");
// para.innerText = 1;

// imgContainer.append(newImage, para);
// // imgContainer.append(newImage);
// // imgContainer.append(para);

// container.append(imgContainer);

for (let i = 1; i <= 900; i++) {
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");

  const newImage = document.createElement("img");
  newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;

  const para = document.createElement("p");
  para.innerText = i;

  imgContainer.append(newImage, para);
  // imgContainer.append(newImage);
  // imgContainer.append(para);

  container.append(imgContainer);
}

// another method of using string
// for (let i = 1; i <= 900; i++) {
//   const imgContainer = document.createElement("div");
//   imgContainer.classList.add("img-container");

//   const myHtml = `
//   <img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png";
//   <p>${i}</p>
//   `;

//   imgContainer.innerHTML = myHtml;

//   container.append(imgContainer);
// }

//another method
// let myHTML = ``

// for (let i = 1; i <= 100; i++) {
//   myHTML += `
//     <div class="img-container">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//         <p>${i}</p>
//     </div>
//     `
// }

// container.innerHTML = myHTML
