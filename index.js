const month = 2
const day = 15
let bday = new Date(2023, month - 1, day);


const countdown = setInterval(() => {
  const current = new Date();
  const distance = bday.getTime() - current.getTime();
  let countdownData = {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  };
  for (data in countdownData)
    document.getElementById(`${data}`).innerHTML = countdownData[`${data}`];
  if (distance <= 0) {
    document.getElementById("countdown").style.display = "none";
    if (
      current.toLocaleDateString("en-US") === bday.toLocaleDateString("en-US")
    ) {
      document.getElementById("bdayOtt").style.display = "block";
    } else {
      bday = new Date(current.getFullYear() + 1, month - 1, day);
    }
  } else {
    document.getElementById("countdown").style.display = "block";
  }
}, 1000);
