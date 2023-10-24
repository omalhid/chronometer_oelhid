class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {

      this.currentTime++;

      if(printTimeCallback){
          printTimeCallback();
        }

       }, 10);
  }

  getMinutes() {
    // ... your code goes here
    return Math.floor((this.currentTime / 6000));
  }

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime %6000 / 100);
  }

  getCentiseconds() {
    // ... your code goes here
    return this.currentTime % 100;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const valueToString = value.toString();
    if (valueToString.length < 2){
      return "0" + valueToString;
    }else{
      return valueToString;
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.stop()
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    /*let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let centiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    let timeFormat = minutes + ":" + seconds + ":" centiseconds;*/

    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}.${this.computeTwoDigitNumber(this.getCentiseconds())}`;

  }
}
