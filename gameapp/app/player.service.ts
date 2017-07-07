import {Player} from './player';

export class PlayerService {
    private players: Player[] =
    [
        { game: "ball", userLogin: "Elena", record: 15.9 },
        { game: "card", userLogin: "Omar", record: 60 },
        { game: "ball", userLogin: "Yuliia", record: 22.6 },
        { game: "card", userLogin: "Yevheniia1393", record:310 }
    ];

    getPlayers(): Player[] {
        return this.players;
    }

    addPlayer(game: string, userLogin: string, record: number) {
        if(!userLogin)
            return;
        if(!record)
            return;
        this.players.push(new Player(game, userLogin, record));
    }

    getUserRecord(login: string) {
        var userRecord = [];
        for ( var i in this.players ) {
            if ( this.players[i].userLogin == login ) {
                userRecord.push(this.players[i]);
            }
        }
        return userRecord;
    }
}