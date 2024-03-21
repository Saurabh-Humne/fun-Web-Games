function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    let timeString = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerText = timeString;
  
    let color = getRandomColor();
    document.getElementById("clock").style.color = color;
  }
  
  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  setInterval(updateClock, 1000);
  