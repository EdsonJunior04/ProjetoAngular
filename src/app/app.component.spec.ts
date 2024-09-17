import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { appC } from './app.component';

describe('appC', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([])
      ],
      declarations: [
        appC
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(appC);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'SegundoProjeto'`, () => {
    const fixture = TestBed.createComponent(appC);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('SegundoProjeto');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(appC);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, SegundoProjeto');
  });
});
