import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { ToDoOverviewComponent } from './component/todo.overview.component';
import { ToListComponent } from './component/todo.list.component';
import { FormsModule } from '@angular/forms';
import { AmexioWidgetModule } from 'amexio-ng-extensions';
import { HttpClientModule } from '@angular/common/http';
import { ToDoService } from './service/todo.service';

@NgModule({
  declarations: [
    AppComponent,
    ToDoOverviewComponent,
    ToListComponent
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

  constructor(ngRedux: NgRedux<IAppState>){
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
