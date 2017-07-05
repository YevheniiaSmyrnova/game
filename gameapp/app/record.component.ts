import { Component } from '@angular/core';
import {PlayerService} from './player.service';
import {Player} from './player';

@Component({
    selector: 'record',
    templateUrl: 'app/record.component.html'
})
export class RecordComponent implements OnInit {

    players: Player[] = [];
    constructor(private playerService: PlayerService){}

    addPlayer(name: string, price: number){

        this.playerService.addPlayer(name, price);
    }
    ngOnInit(){
        this.players = this.playerService.getPlayers();
    }
}