import { Component, HostListener, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DrawerComponent } from './drawer/drawer.component';
import { NavbarComponent } from './navbar/navbar.component';

import { DrawerService } from './drawer/services/drawer.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, DrawerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private drawerService: DrawerService) {}

  @HostListener('document: click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.drawerService.handleToggleOnContentClick(event);
  }
}
