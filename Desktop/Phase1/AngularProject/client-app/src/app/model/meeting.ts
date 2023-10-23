export class Meeting {
    // id:number;
    topic:string;
    participants:number;
    date:any;
    time:any;


    constructor(topic:string='',participants:number,date:any,time:any){
        // this.id = id;
        this.topic = topic;
        this.participants = participants;
        this.date = date;
        this.time = time;
    }
}

