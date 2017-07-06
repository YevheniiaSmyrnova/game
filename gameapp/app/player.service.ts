import {Player} from './player';

export class PlayerService {
    private players: Player[] =
    [
        { name: "Elena", record: 15.9 },
        { name: "Omar", record: 60 },
        { name: "Yuliia", record: 22.6 },
        { name: "Yevheniia", record:310 }
    ];

    getPlayers(): Player[] {
        return this.players;
    }

    addPlayer(name: string, record: number) {
        if(name==null || name==undefined || name.trim()=="")
            return;
        if(record==null || record==undefined)
            return;
        this.players.push(new Player(name, record));
    }
}