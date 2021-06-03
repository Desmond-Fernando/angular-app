import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { ServerComponent } from './server/server.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { UnlessDirective } from './unless/unless.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountHolderComponent } from './account-holder/account-holder.component';
import { StatusHolderComponent } from './status-holder/status-holder.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { Path1Component } from './obser/path1/path1.component';
import { Path2Component } from './obser/path2/path2.component';
import {RouterModule} from "@angular/router";
import { TdFormComponent } from './form/td-form/td-form.component';
import { ReactiveFormComponent } from './form/reactive-form/reactive-form.component';
import { AssignmentComponent } from './form/reactive-form/assignment/assignment.component';

const appRoutes = [
  {path: 'path1', component : Path1Component},
  {path: 'path2', component : Path2Component}
];

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    ServerComponent,
    CockpitComponent,
    ServerElementComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    AccountComponent,
    NewAccountComponent,
    AccountHolderComponent,
    StatusHolderComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    Path1Component,
    Path2Component,
    TdFormComponent,
    ReactiveFormComponent,
    AssignmentComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
