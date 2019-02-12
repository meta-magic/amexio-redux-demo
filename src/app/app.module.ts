import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { ToDoOverviewComponent } from './component/todo.overview.component';
import { ToListComponent } from './component/todo.list.component';
import { FormsModule } from '@angular/forms';
import { AmexioWidgetModule } from 'amexio-ng-extensions';
import { HttpClientModule } from '@angular/common/http';
import { ToDoService } from './service/todo.service';
import { PriorityDashboardComponent } from './component/priority.dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoOverviewComponent,
    ToListComponent,
    PriorityDashboardComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
    FormsModule,
    HttpClientModule,
    AmexioWidgetModule
  ],
  providers: [ToDoService],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension){

    const enhancer = isDevMode() ? [devTools.enhancer()] : [];

    //ngRedux.configureStore(rootReducer, INITIAL_STATE,[],enhancer);
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
