import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TareasService } from '../services/tareas.service';

import { SubtituloComponent } from './subtitulo.component';

describe('SubtituloComponent', () => {
  let component: SubtituloComponent;
  let fixture: ComponentFixture<SubtituloComponent>;

  let service: TareasService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubtituloComponent],
      providers: [TareasService],
    }).compileComponents();

    service = TestBed.inject(TareasService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia renderizar mi prueba 4 elementos', () => {
    const render: HTMLElement = fixture.nativeElement;
    const tareas = render.querySelector('#tareas')?.textContent?.trim();

    expect(tareas).toEqual('Número de tareas: 4');
  });

  it('Deberia disminuir en 1 si elimino un elemento', () => {
    service.deleteTarea('Barrer');
    fixture.detectChanges();

    const render: HTMLElement = fixture.nativeElement;
    const tareas = render.querySelector('#tareas')?.textContent?.trim();

    expect(tareas).toEqual('Número de tareas: 3');
  });

  it('Deberia renderizar el mensaje NO HAY TAREAS EN LA LISTA', () => {
    service.deleteTarea('Barrer');
    service.deleteTarea('Trapear');
    service.deleteTarea('Cocinar');
    service.deleteTarea('Leer');
    fixture.detectChanges();

    const render: HTMLElement = fixture.nativeElement;
    const tareas = render.querySelector('#no-tareas')!.textContent!.trim();

    expect(tareas).toBe('NO HAY TAREAS EN LA LISTA');
  });
});
