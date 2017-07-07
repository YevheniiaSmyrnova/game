import { Component } from '@angular/core';
import {PlayerService} from './player.service';
import {Player} from './player';

@Component({
    selector: 'record',
    templateUrl: 'app/record.component.html'
})
export class RecordComponent implements OnInit {

    player: Player = new Player("", "", 0);
    players: Player[] = [];
    games: string[] = ["Card", "Ball", "Some"];
    constructor(private playerService: PlayerService){}

    addPlayer(){
        this.playerService.addPlayer(this.player.game, this.player.userLogin, this.player.record);
    }

    ngOnInit(){
        this.players = this.playerService.getPlayers();
    }
}