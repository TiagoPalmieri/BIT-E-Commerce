let count = 1;

setInterval(() => {
  const radioElement = document.getElementById('radio' + count);
    
  if (radioElement) {
      radioElement.checked = true;
      count++;
      if (count > 4) {
          count = 1;
      }
  }
}, 5000);