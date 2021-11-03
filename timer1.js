const args = process.argv.slice(2);

const alarm = function(args) {
  let arrOfTimes = args.map(Number);
  for (let i = 0; i < arrOfTimes.length; i++) {
    if (arrOfTimes[i] > 0 &&  Number.isInteger(arrOfTimes[i])) {
      setTimeout(() => {
        process.stdout.write('\x07');
        console.log(`alarm rang at ${arrOfTimes[i]} seconds`)
      }, arrOfTimes[i] * 1000);
    }
  }
};

alarm(args);