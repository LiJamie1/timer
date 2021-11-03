// const args = process.argv.slice(2);

// const alarm = function(args) {
//   let arrOfTimes = args.map(Number);
//   for (let i = 0; i < arrOfTimes.length; i++) {
//     if (arrOfTimes[i] > 0 &&  Number.isInteger(arrOfTimes[i])) {
//       setTimeout(() => {
//         process.stdout.write('\x07');
//         console.log(`alarm rang at ${arrOfTimes[i]} seconds`)
//       }, arrOfTimes[i] * 1000);
//     }
//   }
// };

// alarm(args);

const prompt = require('prompt-sync')();

const timer = function(seconds) {
  const duration = Number(seconds)
  if (Number.isInteger(duration) && duration > 0) {
    console.log(`You set a timer for ${duration} seconds`)
    setTimeout(() => {
      process.stdout.write('\x07');
    }, duration * 1000)
  } else {
    console.log(`${seconds} is not a number!`)
  }
}

timer(prompt('Set Timer: '))