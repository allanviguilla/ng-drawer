import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { DrawerService } from './services/drawer.service';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css',
})
export class DrawerComponent {
  constructor(public drawerService: DrawerService) {}

  toggleDrawer(): void {
    this.drawerService.toggleDrawer();
  }
}
