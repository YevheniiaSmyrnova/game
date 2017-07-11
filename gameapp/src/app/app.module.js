"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login.component");
var registration_component_1 = require("./registration.component");
var sidebar_component_1 = require("./sidebar.component");
var profile_component_1 = require("./profile.component");
var news_component_1 = require("./news.component");
var games_component_1 = require("./games.component");
var record_component_1 = require("./record.component");
var record_table_component_1 = require("./record-table.component");
var not_found_component_1 = require("./not-found.component");
var navigation_service_1 = require("./navigation.service");
var section_service_1 = require("./section.service");
var http_service_1 = require("./http.service");
var user_service_1 = require("./user.service");
var player_service_1 = require("./player.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            forms_2.ReactiveFormsModule,
            http_1.HttpModule],
        declarations: [app_component_1.AppComponent,
            login_component_1.LoginComponent,
            registration_component_1.RegistrationComponent,
            sidebar_component_1.SidebarComponent,
            profile_component_1.ProfileComponent,
            news_component_1.NewsComponent,
            games_component_1.GamesComponent,
            record_component_1.RecordComponent,
            record_table_component_1.RecordTableComponent,
            not_found_component_1.NotFoundComponent],
        providers: [navigation_service_1.NavigationService,
            section_service_1.SectionService,
            http_service_1.HttpService,
            player_service_1.PlayerService,
            user_service_1.UserService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map