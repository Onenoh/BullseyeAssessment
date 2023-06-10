let checkBox = document.querySelector('#toggle-switch');
let amounts = document.querySelectorAll('.amount');

checkBox.addEventListener('change', function() {
  amounts.forEach(amount => {
    if (checkBox.checked) {
      amount.classList.toggle('hide-yearly', true);
      amount.classList.toggle('hide-monthly', false);
    } else {
      amount.classList.toggle('hide-yearly', false);
      amount.classList.toggle('hide-monthly', true);
    }
  });
});
