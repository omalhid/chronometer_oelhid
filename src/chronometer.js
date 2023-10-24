//Chronometer class
//should not receive any arguments
//should have a `currentTime` property with the initial value set to 0
//should have a `intervalId` property with the initial value set to null

class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;

  }

//"start" method
//should be declared
//should receive 1 argument (printTimeCallback)
//should increment by 1 the currentTime property on every 1 second interval
//should invoke the passed argument (printTimeCallback) every 1 second
//should increment the currentTime property to 3 after 3 seconds

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
    }, 1000);

      if(printTimeCallback){
        setInterval(()=> {
          printTimeCallback(this.currentTime);
        }, 1000);
    }

    return this.intervalId;
  }

//  "getMinutes" method
//should be declared
//should not receive any arguments
//should return a number
//should return a number without decimal places
//should return the number of entire minutes passed
//should return 0 when the chronometer hasn't been started
//should return the number of minutes passed even after a very long time

  getMinutes() {
    // ... your code goes here
    return Math.floor(this.currentTime / 60);
  }

//"getSeconds" method
//should be declared
//should not receive any arguments
//should return a number
//should return 0 when the currentTime counting haven't started
//should return the seconds of the currentTime
//should return the seconds portion of the currentTime that remains after removing the minutes

  getSeconds() {
    // ... your code goes here
    return Math.floor(this.currentTime % 60);
  }

  //"computeTwoDigitNumber" method
//should be declared
//should receive 1 argument (value)
//should return a string
//should always return a string of length 2
//should return '00' when the value is 0
//should return '15' when the value is 15
//Should return '03' when the value is 3

  computeTwoDigitNumber(value) {
    // ... your code goes here
    const valueToString = value.toString();
    if (valueToString.length < 2){
      return "0" + valueToString;
    }else{
      return valueToString;
    }
  }

//"stop" method
//should be declared
//should not receive any arguments
//should call the clearInterval
//should stop a previously started chronometer
 
  stop() {
    // ... your code goes here
    clearInterval (this.intervalId)
  }

//"reset" method
//should be declared
//should not receive any arguments
//should reset the value of the "currentTime" property to 0

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

//"split" method
//should be declared
//should not receive any arguments
//should return valid format with minutes and seconds "mm:ss"

  split() {
    // ... your code goes here
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    let timeFormat = minutes + ":" + seconds;

    return timeFormat;
  }
}
