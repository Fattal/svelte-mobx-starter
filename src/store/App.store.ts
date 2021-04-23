import {action, computed, makeObservable, observable} from "mobx";

const UPDATE_INTERVAL = 1000;

export default class AppVm {
  @observable
  private startTime: Date = new Date();

  @observable
  private currentTime: Date = new Date();

  constructor() {
    makeObservable(this);
    setInterval(() => this.updateCurrentTime(), UPDATE_INTERVAL);
  }

  @computed
  private get elapsedSeconds() {
    return Math.round((this.currentTime.getTime() - this.startTime.getTime()) / 1000);
  }

  @computed
  public get currentTimeString() {
    return this.currentTime.toDateString();
  }

  @computed
  public get elapsedSecondsString() {
    return `${this.elapsedSeconds} ${this.elapsedSeconds === 1 ? "second" : "seconds"}`;
  }

  @action
  private updateCurrentTime() {
    this.currentTime = new Date();
  }
}