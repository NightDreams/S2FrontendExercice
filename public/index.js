let $home = document.querySelector(".home");

const navBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  $home.style.backgroundColor = "#" + randomColor;
};

$home.addEventListener("click", navBg);
