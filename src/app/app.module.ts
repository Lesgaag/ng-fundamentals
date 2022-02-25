import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events-list.component';
import { EventThumbnailComponent } from './event-thumbnail.component';

@NgModule({
  imports: [
    // import services here
    BrowserModule
  ],
  declarations: [
    // declare pipes, component or directive here
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent
  ],
  // import other modules here
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
