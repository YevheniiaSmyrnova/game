import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { WelcomeComponent }   from './welcome.component';
import { RecordComponent }   from './record.component';
import { RecordTableComponent }   from './recordtable.component';
@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, WelcomeComponent, RecordComponent, RecordTableComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }