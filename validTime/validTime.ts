function validTime(time: string): boolean {
  const [hours, minutes] = time.split(':').map(Number);
  return hours >= 0 && hours < 24 && minutes >= 0 && minutes < 60;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));
