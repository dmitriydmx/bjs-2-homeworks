class AlarmClock {
  constructor() {     
    this.alarmCollection = [];     
    this.intervalId = null;
  }
  
  addClock (time, callback) {
    if(!time || !callback) {
      throw new Error('Отсутствуют обязательные аргументы');  
    }  
    else if (this.alarmCollection.find(clock => clock.time === time)) {
        console.warn('Уже присутствует звонок на это же время');
    } 
    return this.alarmCollection.push(
        {callback,
         time,
         canCall: true,   
        }
    )
  }

  removeClock (time) {
    this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time);
  }

  getCurrentFormattedTime() {
    let today = new Date();
    let hour = today.getHours().toString().length < 2 ? '0' + today.getHours() : today.getHours();
    let minute = today.getMinutes().toString().length < 2 ? '0' + today.getMinutes() : today.getMinutes();    
    let currentTime = `${hour}:${minute}`;
    return currentTime;
  }  

  start() {
    if(this.intervalId) {
      return;
    }
    const checkClock = () => {
      const currentTime = this.getCurrentFormattedTime();
      this.alarmCollection.forEach(clock => {
          if (clock.time === currentTime && clock.canCall) {
            clock.canCall = false;
            clock.callback();
          }
      });
    };
    checkClock();
    this.intervalId = setInterval(checkClock, 1000);
  }  

  stop() {    
    clearInterval(this.intervalId);
    this.intervalId = null;    
  } 

  resetAllCalls() {
    this.alarmCollection.forEach(clock => clock.canCall = true)
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  } 
}

