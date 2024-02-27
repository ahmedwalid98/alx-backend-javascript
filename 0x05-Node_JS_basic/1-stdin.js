process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
  let chunck = process.stdin.read();
  console.log(`Your name is: ${chunck}`);
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
