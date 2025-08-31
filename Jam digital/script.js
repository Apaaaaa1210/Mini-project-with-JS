function clock() {
  let now = new Date();
  let hours = now.getHours();
  hours = hours < 10 ? "0" + hours : hours;
  let minutes = now.getMinutes();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  let second = now.getSeconds();
  second = second < 10 ? "0" + second : second;
  let jamElement = document.getElementById("jam");

  jamElement.style.opacity = "0";
  setTimeout(() => {
    jamElement.textContent = hours + ":" + minutes + ":" + second;
    jamElement.style.opacity = "1";
  }, 200);
}

clock();
setInterval(clock, 1000);
