//Caluclate Tip

function calculateTip() {
  const billAmount = document.getElementById('bill-amount').value,
    serviceRating = document.getElementById('service-rating').value,
    numberOfPeople = document.getElementById('number-of-people').value;
  // Validate input
  if (billAmount < 0) {
    alert('Please enter valid value');
  }

  // if (billAmount === '' || numberOfPeople === 0 || serviceRating === '') {
  //   alert('Please enter values');
  // }

  let total = (billAmount * serviceRating) / numberOfPeople;
  // Round to two decimal places
  total = Math.round(total * 100) / 100;
  // Allow to have two digits after decimal point
  total = total.toFixed(2);
  // Display tip
  document.getElementById('total-tip').style.display = 'block';
  document.getElementById('tip').innerHTML = total;
}

// Hide tip amount on load
document.getElementById('total-tip').style.display = 'none';

// Click to call function
document.getElementById('calculate').addEventListener('click', function () {
  calculateTip();
})