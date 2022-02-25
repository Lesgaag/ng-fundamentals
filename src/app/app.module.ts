import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events-list.component';
import { EventThumbnailComponent } from './event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.components';
import { EventService } from './shared/events.service';
import { ToastrService } from './common/toastr.service';

@NgModule({
  imports: [
    // import services here
    BrowserModule
  ],
  declarations: [
    // declare pipes, component or directive here
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  // import other modules here
  providers: [EventService, ToastrService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
