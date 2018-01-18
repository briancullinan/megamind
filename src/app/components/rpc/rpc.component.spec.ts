import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpcComponent } from './rpc.component';

describe('RpcComponent', () => {
    let component: RpcComponent;
    let fixture: ComponentFixture<RpcComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ RpcComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RpcComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
