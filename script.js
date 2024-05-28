
function countdownFromTen(callback) {
    let count = 10;
    
    function countdown() {
      document.getElementById('countdown').innerText = count;
      count--;
  
      if (count >= 0) {
        setTimeout(countdown, 1000); // Call countdown function after 1 second
      } else {
        callback();
      }
    }
  
    countdown();
  }
  
  function displayBigText() {
    document.getElementById('countdown').innerText = 'Happy Independence Day!';
    document.getElementById('countdown').classList.add('big-text');
  }
  
  countdownFromTen(displayBigText);