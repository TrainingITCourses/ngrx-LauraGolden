import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent} from './search/search.component';
import { LaunchesListComponent } from './shared/launches-list/launches-list.component';
import { CriterionComponent } from './shared/criterion/criterion.component';
import { CounterComponent } from './shared/counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ApiService } from './services/api.service';
import { EffectsModule } from '@ngrx/effects';
import { AgenciasEffects } from './reducers/agencias.effects';
import { EstadosEffects } from './reducers/estados.effects';
import { MisionesEffects } from './reducers/misiones.effects';
import { LanzamientosEffects } from './reducers/lanzamientos.effects';
import { ValoresEffects } from './reducers/valores.effects';



@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    LaunchesListComponent,
    CriterionComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AgenciasEffects, EstadosEffects, MisionesEffects, LanzamientosEffects, ValoresEffects])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
