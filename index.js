let username = prompt('Enter your name');
let range = 2;
let guess;
let random = Math.floor(Math.random() * range);
while (true) {
  let guess = prompt(`${username} Enter your guess digit form the range of 0 - ${range} [level ${range -1}]`);
  if(guess == random){
    range++
    console.log(`Congratulations ${username} you have been levelled up to stage `)
  }
  else{
    console.log(`Hey ${username} try again later, game over buddy, you guessed`, guess, 'The correct answer is ', random)
    break;
  }
}