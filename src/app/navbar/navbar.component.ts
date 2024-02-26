import { Component, Input, OnInit } from '@angular/core';

import { DrawerService } from '../drawer/services/drawer.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  @Input() isDrawerOpen: boolean = false;

  constructor(private drawerService: DrawerService) {}

  ngOnInit(): void {
    this.drawerService.drawerOpenState.subscribe((isOpen) => {
      this.isDrawerOpen = isOpen;
    });
  }

  toggleDrawer(): void {
    this.drawerService.toggleDrawer();
  }
}
