import { Component } from '@angular/core';
import { EventService } from './shared/events.service';
import { ToastrService } from './common/toastr.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'events-list',
    // with 'templateURL' (instead of 'temlate') possibility to add html in seperate file
    // with 'styleURL' (instead of 'style') possibility to add css in seperate file
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event" ></event-thumbnail>
            </div>
        </div>
    </div>
    `,
})
export class EventsListComponent {
    events: any[];
    constructor(private eventService: EventService, private toastr: ToastrService) {
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.events = this.eventService.getEvents();
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName);
    }
}
