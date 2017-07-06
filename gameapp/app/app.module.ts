import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { SidebarComponent }   from './sidebar.component';
import { ProfileComponent }   from './profile.component';
import { NotFoundComponent }   from './not-found.component';
import { RecordComponent }   from './record.component';
import { RecordTableComponent }   from './record-table.component';

import {SectionService} from './section.service';
import {UserService} from './user.service';
import {PlayerService} from './player.service';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, SidebarComponent, ProfileComponent, NotFoundComponent, RecordComponent, RecordTableComponent ],
    providers:    [ SectionService, PlayerService, UserService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }