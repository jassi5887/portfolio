import { Subject } from 'rxjs/Subject';

export class NavService {
  private navActive = false;
  navStatusChanged = new Subject<boolean>();

  getNavStatus() {
    return this.navActive;
  }

  setNavStatus(status: boolean) {
    this.navActive = status;
    this.navStatusChanged.next(status);
  }
}