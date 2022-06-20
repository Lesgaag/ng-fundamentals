import { Component } from '@angular/core';
import { EventService } from '../shared/events.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISessions } from '../shared/index';

@Component({
 templateUrl: './events-details.component.html',
 styles: [`
 .container { padding-left: 20px; padding-right: 20px; }
 .event-image { height: 100px; }
 a {cursor:pointer}
 `]
})
export class EventDetailsComponent {
    event: IEvent;
    addMode: boolean;
    filterBy: string = 'all';
    sortBy: string = 'votes';

    constructor(private eventService: EventService, private route: ActivatedRoute) {
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISessions) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }
}
