import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { PagesComponent } from './components/pages/pages.component';
import { CounterComponent } from './components/counter/counter.component';
import { DynamicFormComponent }         from './components/dynamicform/dynamic-form.component';
import { DynamicFormElementComponent } from './components/dynamicform/dynamic-form-element.component';

export const sharedConfig: NgModule = {
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        PagesComponent,
        DynamicFormComponent,
        DynamicFormElementComponent,
        HomeComponent
    ],
    imports: [
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'pages', component: PagesComponent },
            { path: '*', redirectTo: 'home' }
        ]), ReactiveFormsModule 
    ]
};
