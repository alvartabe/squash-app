import { Component, Signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';

@Component({
    selector: 'app-stack-layout',
    templateUrl: './stack-layout.component.html',
    styleUrl: './stack-layout.component.scss',
    imports: [HeaderComponent, RouterModule, MenuComponent],
})
export class StackLayoutComponent {
    constructor() {}
}
