export class NetWorth {
  activate() {
    this.update();
    this.timer = setInterval(() => this.update(), 1000);
  }

  deactivate() {
    clearInterval(this.timer);
    this.timer = 0;
  }

  update() {
    this.currentDate = new Date();
    this.netWorth = Math.random() * 1000000000;
  }
}
