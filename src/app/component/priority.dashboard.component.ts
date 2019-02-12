import { Component } from '@angular/core';
import { select } from '@angular-redux/store';

@Component({
    selector : 'priority-dashboard',
    templateUrl : './priority.dashboard.component.html'
})
export class PriorityDashboardComponent {

    @select('severityStatus') severityStatus;

    
}