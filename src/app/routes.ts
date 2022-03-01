import { Routes } from '@angular/router';
import { CreateEventComponent } from './create-event.components';
import { Error404Component } from './errors/404.component';
import { EventDetailsComponent } from './event-details/event-details.components';
import { EventRouteActivator } from './event-details/event-route-activator.service';
import { EventsListComponent } from './events-list.component';
import { EventListResolver } from './shared/events-list-resolver.service';

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent, resolve:
    {events: EventListResolver}},
    { path: 'events/:id', component: EventDetailsComponent,
    canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full'}
];
