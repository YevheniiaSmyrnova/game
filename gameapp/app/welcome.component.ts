import { Input, Component } from '@angular/core';

@Component({
    selector: 'welcome',
    template: `<h1>Добро пожаловать {{userName}}!</h1>`,
    styles: [`h1, p {color:red;}`]
})
export class WelcomeComponent {
    @Input() userName: string;
}