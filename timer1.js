const args = process.argv.slice(2);

const alarm = function(args) {
  let arrOfTimes = args.map(Number);
  for (let i = 0; i < arrOfTimes.length; i++) {
    setTimeout(() => {
      process.stdout.write('\x07')
    }, arrOfTimes[i] * 1000);
  }
};

alarm(args);