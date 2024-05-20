document.getElementById('rollButton').addEventListener('click', function() {
  const FirstRandomNumber = Math.floor(Math.random() * 6) + 1;
  const FirstImg = 'assets/dice' + FirstRandomNumber + '.png';
  document.querySelectorAll('img')[0].setAttribute('src', FirstImg);

  const SecondRandomNumber = Math.floor(Math.random() * 6) + 1;
  const SecondImg = 'assets/dice' + SecondRandomNumber + '.png';
  document.querySelectorAll('img')[1].setAttribute('src', SecondImg);

  if (FirstRandomNumber > SecondRandomNumber) {
      document.querySelector('h1').innerHTML = 'The winner is User 1!';
  } else if (FirstRandomNumber < SecondRandomNumber) {
      document.querySelector('h1').innerHTML = 'The winner is User 2!';
  }
  else{
    console.log("both are same !");
  }
});
