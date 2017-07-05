import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }   from './app.component';
import { SidebarComponent }   from './sidebar.component';
import { NotFoundComponent }   from './not-found.component';
import { RecordComponent }   from './record.component';
import { RecordTableComponent }   from './record-table.component';

import {PlayerService} from './player.service';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, SidebarComponent, NotFoundComponent, RecordComponent, RecordTableComponent ],
    providers:    [ PlayerService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }