import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ElementBase } from './element-base';
import { ElementControlService } from './element-control.service';

@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [ElementControlService]
})
export class DynamicFormComponent implements OnInit {

    @Input() elements: ElementBase<any>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private qcs: ElementControlService) { }

    ngOnInit() {
        this.form = this.qcs.toFormGroup(this.elements);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}