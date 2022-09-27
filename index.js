
class Watchdog {
  constructor(timeoutms, callback) {
    this.timeoutms=timeoutms;
    this.callback=callback;
  }

  trigger() {
    if (typeof this.timer!="undefined") {
      clearTimeout(this.timer)
    }
    this.timer=setTimeout(this.callback,this.timeoutms);
  }
}

module.exports = Watchdog;