import {Player} from './player';

export class PlayerService implements OnInit {
    private players: Player[] =
    [
        { game: "ball", player: "Elena", record: 15.9 },
        { game: "card", player: "Omar", record: 60 },
        { game: "ball", player: "Yuliia", record: 22.6 },
        { game: "card", player: "Yevheniia1393", record:310 }
    ];

    getPlayers(): Player[] {
        return this.players;
    }

    addPlayer(game: string, player: string, record: number) {
        if(!player)
            return;
        if(!record)
            return;
        this.players.push(new Player(game, player, record));
    }

    getUserRecord(login: string) {
        var userRecord = [];
        for ( var i in this.players ) {
            if ( this.players[i].player == login ) {
                userRecord.push(this.players[i]);
            }
        }
        return userRecord;
    }
}