import { Component } from '@angular/core';

@Component({
    selector: 'games',
    templateUrl: './games.component.html'
})
export class GamesComponent {
    games = [
        "Game 1",
        "Game 2",
        "Game 3",
        "Game 4",
        "Game 5"
    ];
}
