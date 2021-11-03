const click = document.getElementsByClassName("click")[0];
const resst = document.querySelector(".rest");
let text = document.getElementsByClassName("ans")[0];

click.addEventListener("click", () => {
  let birth = prompt("hey.. What year were you born... My good friend");
  let calc= (2021-birth)*365;
  text.textContent="Your are " + calc + " days";
});
function restart() {
    text.remove();
}