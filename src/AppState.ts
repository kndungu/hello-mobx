import { observable, runInAction, useStrict } from 'mobx';

useStrict(true);

export default class AppState {
  @observable timer = 0;
  constructor() {
    setInterval(() => {
      runInAction('secondPassed', () => {
        this.timer += 1;
      });
    }, 1000);
  }

  resetTimer() {
    this.timer = 0;
  }
}
