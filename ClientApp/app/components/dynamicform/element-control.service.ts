import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ElementBase } from './element-base';

@Injectable()
export class ElementControlService {
    constructor() { }

    toFormGroup(elements: ElementBase<any>[]) {
        let group: any = {};

        elements.forEach(element => {
            group[element.key] = element.required ? new FormControl(element.value || '', Validators.required)
                : new FormControl(element.value || '');
        });
        return new FormGroup(group);
    }
}