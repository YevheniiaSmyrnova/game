import { Component, OnInit } from '@angular/core';
import { PlayerService }     from './player.service';
import { HttpService }       from './http.service';
import { Player }            from './player';

@Component({
    selector: 'record',
    templateUrl: './record.component.html'
})
export class RecordComponent implements OnInit {

    player: Player = new Player("", "", 0);
    players: Player[];
    games: string[] = ["Card", "Ball", "Some"];
    private playerService: any;
    private httpService: any;

    constructor(playerService: PlayerService, httpService: HttpService){
        this.playerService = playerService;
        this.httpService = httpService;
    };

    addPlayer(){
        this.playerService.addPlayer(this.player.game, this.player.player, this.player.record);
    }

    ngOnInit(){
        this.players = this.playerService.getPlayers();

    }
}
