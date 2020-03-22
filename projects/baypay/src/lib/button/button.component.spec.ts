import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onBtnClick()', () => {
    expect(component.onBtnClick).toBeTruthy();
  });

  it('onBtnClick(): called', () => {
    spyOn(component, 'onBtnClick');
    const button = fixture.debugElement.nativeElement.querySelector('.btn');
    button.click();
    expect(component.onBtnClick).toHaveBeenCalled();
  });
});
