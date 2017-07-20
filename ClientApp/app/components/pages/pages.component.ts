import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { ElementService } from '../dynamicform/element.service';

@Component({
    selector: 'pages',
    templateUrl: './pages.component.html',
    providers:  [ElementService]
})
export class PagesComponent {
    public pages: Page[];
    elements: any[];
 
  constructor(http: Http, @Inject('ORIGIN_URL') originUrl: string, service: ElementService) {
        this.elements = service.getElements();
        http.get(originUrl + '/api/Core/Pages').subscribe(result => {
            this.pages = result.json() as Page[];
        });
    }
}

interface Page {
    Id: string,
    Title: string;
    Slug: string;
    Published: boolean;
}
