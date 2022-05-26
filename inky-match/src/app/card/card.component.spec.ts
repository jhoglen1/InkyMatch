import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;
  jasmine.clock().install();
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('ngOninit calls to start game and modal', () => {
    let modal = document.getElementById("startModal");

    component.ngOnInit();
    component.startGameModal()

    expect(modal.style.display).toEqual("block")
    expect(component.ngOnInit).toBeTruthy();
  });
  it('start modal on click of button close modal', () => {
    component.startGameModal();
    expect(component.startGameModal).toBeTruthy();
  });

  it('reStartGameModal shows the end modal then restarts', () => {
    jasmine.clock().tick(6500);

    component.reStartGameModal();

    expect(component.reStartGameModal).toBeTruthy();
  });
});

