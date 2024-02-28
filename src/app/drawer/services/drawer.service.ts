import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  isOpen: boolean = false;

  drawerOpenState = new EventEmitter<boolean>();

  handleDrawerToggle(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;
    if (clickedElement.id === 'toggleDrawer') this.toggleDrawer();
    if (this.isOpen && clickedElement.id !== 'toggleDrawer')
      this.toggleDrawer();
  }

  toggleDrawer(): void {
    this.isOpen = !this.isOpen;
    this.drawerOpenState.emit(this.isOpen);
  }
}
