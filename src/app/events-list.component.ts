import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'events-list',
    // with 'templateURL' (instead of 'temlate') possibility to add html in seperate file
    // with 'styleURL' (instead of 'style') possibility to add css in seperate file
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <event-thumbnail #thumbnail [event]='event1'></event-thumbnail>
    </div>
    `,
})
export class EventsListComponent {
    // class data can be shown with list-binder {{}} in html
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    };
}
