import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ElementBase } from './element-base';

@Component({
    selector: 'df-element',
    templateUrl: './dynamic-form-element.component.html'
})
export class DynamicFormElementComponent {
    @Input() element: ElementBase<any>;
    @Input() form: FormGroup;
    get isValid() { return this.form.controls[this.element.key].valid; }
}