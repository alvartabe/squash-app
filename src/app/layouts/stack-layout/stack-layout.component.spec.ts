import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StackLayoutComponent } from './stack-layout.component';
import { LayoutFacade } from '../layout.facade';
import { AppConfig } from 'src/environments/app-config';
import { Five9Facade } from 'src/app/five9/five9.facade';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { SoftphoneService } from 'src/app/core/softphone.service';

describe('StackLayoutComponent', () => {
    let component: StackLayoutComponent;
    let fixture: ComponentFixture<StackLayoutComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [StackLayoutComponent],
            providers: [
                { provide: LayoutFacade, useValue: {
                    stateChanges: () => of({}),
                } },
                { provide: AppConfig, useValue: { build: {}, five9: { adtUrl: '' } } },
                {
                    provide: SoftphoneService,
                    useValue: {
                        stateChanges: () => of({}),
                        initialize: () => {
                            //
                        },
                    },
                },
                {
                    provide: Five9Facade,
                    useValue: {
                        useValue: {
                            initialize: () => {
                                //
                            },
                            softphoneStateChanges: () => of({}),
                        },
                    },
                },
                { provide: ActivatedRoute, useValue: {} },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(StackLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
