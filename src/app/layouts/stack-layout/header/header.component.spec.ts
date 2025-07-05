import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MemberModel } from 'src/app/models';
import { HeaderComponent } from './header.component';
import { PagedList } from 'src/app/paged-list';
import { ActivatedRoute } from '@angular/router';
import { LayoutFacade } from '../../layout.facade';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HeaderComponent],
            providers: [
                {
                    provide: LayoutFacade,
                    useValue: jasmine.createSpyObj<LayoutFacade>(LayoutFacade.name, { searchMembers: of({} as PagedList<MemberModel>) }),
                },
                { provide: ActivatedRoute, useValue: {} }
            ],
        });
        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
