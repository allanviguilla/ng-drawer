import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DrawerService {
  //State of the drawer
  isOpen: boolean = false;

  //Emit the current drawer state
  drawerOpenState = new EventEmitter<boolean>();

  //If  you click on the content area toggle the drawer closed
  handleToggleOnContentClick(event: MouseEvent): void {
    const clickedElement = event.target as HTMLElement;

    //If the drawer is open and the clickedElement is the content area toggle the drawer closed
    if (this.isOpen == true && clickedElement.classList.contains('content')) {
      this.toggleDrawer();
    }
  }

  //Toggle drawer and attach to click event
  toggleDrawer(): void {
    this.isOpen = !this.isOpen;
    this.drawerOpenState.emit(this.isOpen);
  }
}
