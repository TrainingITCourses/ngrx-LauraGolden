import { Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import { ApiService } from '../services/api.service';
import { Store } from '@ngrx/store';
import { State } from '../reducers';
import { ModoBusqueda } from '../shared/criterion/criterion-modo';
import { CargarAgencias } from '../reducers/agencias.actions';
import { CargarEstados } from '../reducers/estados.actions';
import { CargarMisiones } from '../reducers/misiones.actions';
import { FiltrarLanzamientos } from '../reducers/lanzamientos.actions';
import { Observable } from 'rxjs';
import { LanzamientoState } from '../reducers/lanzamientos.reducer';
import { EstadoState } from '../reducers/estados.reducer';
import { AgenciaState } from '../reducers/agencias.reducer';
import { MisionState } from '../reducers/misiones.reducer';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ApiService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {
  // public lanFiltrados$: Observable<any>;
  // public criterios$: Observable<any>;
  public valores$: Observable<any>;
  public lanFiltrados$: Observable<any>;
  public seleccionado: ModoBusqueda;
  private criterioActual: ModoBusqueda;

  constructor(private store: Store<State>) { }
  @Input() public titulo: string;

  ngOnInit() {
    this.cargaData();
    this.cargaObservables();
    console.log('Search_ngOnInit');
  }


  // cargaData( id: number, name: string ) {
  cargaData() {
    this.store.dispatch(new CargarEstados());
    this.store.dispatch(new CargarAgencias());
    this.store.dispatch(new CargarMisiones());
    this.store.dispatch(new CargarMisiones());
  }

  private cargaObservables() {
    this.store
      .select<LanzamientoState>('Lanzamientos')
      .subscribe((lan: any) => {
        this.lanFiltrados$ = lan;
      });

      // switch (this.criterioActual) {
      //   case 1: // Estados
      //       this.store
      //       .select<EstadoState>('Estados')
      //       .subscribe((est: any) => {
      //         this.valores$ = est;
      //       });
      //       break;
      //   case 2: // Agencias
      //       this.store
      //       .select<AgenciaState>('Agencias')
      //       .subscribe((est: any) => {
      //         this.valores$ = est;
      //       });
      //       break;
      //   case 3: // Tipos
      //       this.store
      //       .select<MisionState>('Misiones')
      //       .subscribe((est: any) => {
      //         this.valores$ = est;
      //       });
      //     break;
      //   default:
      // }

    // this.valores$ = this.global.select$(GlobalSlideTypes.valores);
    // this.lanFiltrados$ = this.global.select$(GlobalSlideTypes.lanzamientos);
  }

  onCriterioSeleccionado (criterioSel: ModoBusqueda) {
    console.log('criterio seleccionado: ' + criterioSel);

    this.criterioActual = criterioSel;
    // this.api.getCriteria(criterioSel);
    switch (criterioSel) {
      case 1: // Estados
        // this.store.dispatch(new CargarEstados());
        this.store
            .select<EstadoState>('Estados')
            .subscribe((est: any) => {
              this.valores$ = est;
            });
        break;
      case 2: // Agencias
        // this.store.dispatch(new CargarAgencias());
        break;
      case 3: // Tipos
        // this.store.dispatch(new CargarMisiones());
        break;
      default:
    }
  }

  onSubCriterioSeleccionado = (SubcriterioSel: Number) => {
    console.log('Busqueda por criterio seleccionado: ' + SubcriterioSel);
    // Duda: por mucho que reciba un parámetro de tipo Number, me llega siempre un string,
    // ¿da igual qué tipo se ponga para recibir el parámetro?
    const busca: number = Number(SubcriterioSel);
    // this.api.getFilterLaunches(this.criterioActual, busca);
    // onBrake = () => this.store.dispatch(new Brake());
    // onThrottle = () => this.store.dispatch(new Throttle());
    // onSave = () => this.store.dispatch(new Save(this.motor));

  }
}
