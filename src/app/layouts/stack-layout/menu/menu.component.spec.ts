import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import { AppConfig } from 'src/environments/app-config';
import { AuthorizationService } from '@muziehdesign/angularcore';
import { provideRouter } from '@angular/router';

describe('MenuComponent', () => {
    let component: MenuComponent;
    let fixture: ComponentFixture<MenuComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MenuComponent],
            providers: [
                provideRouter([]),
                {
                    provide: AppConfig,
                    useValue: {
                        build: { tag: 'test' },
                    },
                },
                { provide: AuthorizationService, useValue: {} },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(MenuComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
