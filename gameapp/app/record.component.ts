import { Component } from '@angular/core';

export class Player{
    name: string;
    record: number;

    constructor(name: string, record: number) {
        this.name = name;
        this.record = record;
    }
}

@Component({
    selector: 'record',
    templateUrl: 'app/record.component.html'
})
export class RecordComponent {
    players: Player[] =
    [
        { name: "Elena", record: 15.9 },
        { name: "Omar", record: 60 },
        { name: "Yuliia", record: 22.6 },
        { name: "Yevheniia", record:310 }
    ];

    addPlayer(name: string, record: number): void {
        if(name==null || name==undefined || name.trim()=="")
            return;
        if(record==null || record==undefined)
            return;
        this.players.push(new Player(name, record));
    }
}