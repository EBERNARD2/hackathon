document.addEventListener("DOMContentLoaded", () => {
  const image = document.createElement("img");

  image.setAttribute(
    "src",
    "https://cdn.discordapp.com/attachments/877302817071726633/877307065041842297/PXL_20201203_184153617.jpg"
  );
  image.setAttribute("id", "rachel cat");
  document.querySelector("body").appendChild(image);
});
