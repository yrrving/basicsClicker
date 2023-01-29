let money = 0;
let moneyPerClick = 1;
let moneyPerSecond = 0;

document.getElementById("click-button").addEventListener("click", function() {
  money += moneyPerClick;
  updateMoney();
});

setInterval(function() {
  money += moneyPerSecond;
  updateMoney();
}, 1000);

function updateMoney() {
  document.getElementById("money").innerHTML = money;
}
