import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  isOpen: boolean = false;

  drawerOpenState = new EventEmitter<boolean>();

  toggleDrawer(): void {
    this.isOpen = !this.isOpen;
    this.drawerOpenState.emit(this.isOpen);
  }
}
