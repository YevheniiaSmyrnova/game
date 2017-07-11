import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { FormsModule }           from '@angular/forms';
import { ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }            from '@angular/http';

import { AppComponent }          from './app.component';
import { LoginComponent }        from './login.component';
import { RegistrationComponent } from './registration.component';
import { SidebarComponent }      from './sidebar.component';
import { ProfileComponent }      from './profile.component';
import { NewsComponent }         from './news.component';
import { GamesComponent }        from './games.component';
import { RecordComponent }       from './record.component';
import { RecordTableComponent }  from './record-table.component';
import { NotFoundComponent }     from './not-found.component';

import { NavigationService }     from './navigation.service';
import { SectionService }        from './section.service';
import { HttpService }           from './http.service';
import { UserService }           from './user.service';
import { RecordService }         from './record.service';

@NgModule({
    imports:      [ BrowserModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpModule ],
    declarations: [ AppComponent,
                    LoginComponent,
                    RegistrationComponent,
                    SidebarComponent,
                    ProfileComponent,
                    NewsComponent,
                    GamesComponent,
                    RecordComponent,
                    RecordTableComponent,
                    NotFoundComponent ],
    providers:    [ NavigationService,
                    SectionService,
                    HttpService,
                    RecordService,
                    UserService ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
