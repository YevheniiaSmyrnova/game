import { Record } from './record';

export class RecordService {
    private records: Record[] =
    [
        { game: "ball", player: "Elena", record: 15.9 },
        { game: "card", player: "Omar", record: 60 },
        { game: "ball", player: "Yuliia", record: 22.6 },
        { game: "card", player: "Yevheniia1393", record:310 }
    ];

    getRecords(): Record[] {
        return this.records;
    }

    addRecord(game: string, player: string, record: number) {
        if(!player)
            return;
        if(!record)
            return;
        this.records.push(new Record(game, player, record));
    }

    getUserRecord(login: string) {
        var userRecord = [];
        for ( var i in this.records ) {
            if ( this.records[i].player == login ) {
                userRecord.push(this.records[i]);
            }
        }
        return userRecord;
    }
}
