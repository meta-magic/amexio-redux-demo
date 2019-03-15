import { Component } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';

@Component({
    selector : 'priority-dashboard',
    templateUrl : './priority.dashboard.component.html'
})
export class PriorityDashboardComponent {

    @select('severityStatus') severityStatus;
    

    constructor(private ngRedux : NgRedux<IAppState>){
        
        this.ngRedux.subscribe(()=>{
            console.log("--IN CASE YOU WANT TO BIND DATA TO MODEL DO HEAR--"+JSON.stringify(ngRedux.getState()));
        })
    }
}