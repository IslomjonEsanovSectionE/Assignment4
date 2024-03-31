
let targetDate = new Date('2024-04-16T23:59:59').getTime();


let countdownInterval = setInterval(() => {

  let currentDate = new Date().getTime();


  let remainingTime = targetDate - currentDate;

  if (remainingTime <= 0) {
    clearInterval(countdownInterval); 
    document.getElementById('countdown').innerText = 'Countdown Over';
  } else {

    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}, 1000); 
