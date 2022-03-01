import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events-list.component';
import { EventThumbnailComponent } from './event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.components';
import { EventService } from './shared/events.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './event-details/event-details.components';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './create-event.components';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './event-details/event-route-activator.service';
import { EventListResolver } from './shared/events-list-resolver.service';

@NgModule({
  imports: [
    // import services here
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    // declare pipes, component or directive here
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
  ],
  // import other modules here
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventListResolver,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

// Disables all posibilities to leave the page
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  } else {
    return true;
  }
}
