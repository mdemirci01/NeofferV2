import { Injectable } from '@angular/core';

import { DropdownElement } from './dropdown-element';
import { ElementBase } from './element-base';
import { TextboxElement } from './textbox-element';

@Injectable()
export class ElementService {

    // Todo: get from a remote source of element metadata
    // Todo: make asynchronous
    getElements() {

        let elements: ElementBase<any>[] = [

            new DropdownElement({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid' },
                    { key: 'great', value: 'Great' },
                    { key: 'good', value: 'Good' },
                    { key: 'unproven', value: 'Unproven' }
                ],
                order: 3
            }),

            new TextboxElement({
                key: 'firstName',
                label: 'First name',
                value: 'Bombasto',
                required: true,
                order: 1
            }),

            new TextboxElement({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 2
            })
        ];

        return elements.sort((a, b) => a.order - b.order);
    }
}