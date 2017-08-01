import { NgModule }               from '@angular/core';
import { BrowserModule }          from '@angular/platform-browser';
import {Routes, RouterModule}     from '@angular/router';
import { FormsModule }            from '@angular/forms';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import { OrderModule }            from 'ngx-order-pipe';

import { AppComponent }           from './app.component';
import { LoginComponent }         from './login/login.component';
import { RegistrationComponent }  from './registration/registration.component';
import { SidebarComponent }       from './sidebar/sidebar.component';
import { ProfileComponent }       from './profile/profile.component';
import { NewsComponent }          from './news/news.component';
import { NewsDetailComponent }          from './news/news-detail.component';
import { GamesComponent }         from './games/games.component';
import { RecordComponent }        from './records/record.component';
import { RecordTableComponent }   from './records/record-table.component';
import { NotFoundComponent }      from './not-found/not-found.component';

import { NavigationService }      from './navigation.service';
import { UserService }            from './profile/user.service';
import { NewsService }            from './news/news.service';
import { RecordService }          from './records/record.service';

import { GamesGuard }             from './games/games.guard';

const sideBarRoutes: Routes =[
    { path: '', component: ProfileComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'news', component: NewsComponent },
    { path: 'news/detail/:id', component: NewsDetailComponent },
    { path: 'games', component: GamesComponent, canActivate: [GamesGuard] },
    { path: 'records', component: RecordComponent }
];

const appRoutes: Routes =[
    { path: '', component: ProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistrationComponent },
    { path: '', component: SidebarComponent, children: sideBarRoutes },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports:      [ BrowserModule,
                    RouterModule.forRoot(appRoutes),
                    FormsModule,
                    ReactiveFormsModule,
                    HttpModule,
                    JsonpModule,
                    OrderModule ],
    declarations: [ AppComponent,
                    LoginComponent,
                    RegistrationComponent,
                    SidebarComponent,
                    ProfileComponent,
                    NewsComponent,
                    NewsDetailComponent,
                    GamesComponent,
                    RecordComponent,
                    RecordTableComponent,
                    NotFoundComponent ],
    providers:    [ NavigationService,
                    UserService,
                    NewsService,
                    RecordService,
                    GamesGuard ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
