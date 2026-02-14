export class TodoGenerator{
    constructor(title, discription, date, priority){
        this.id = crypto.randomUUID();
        this.title = title;
        this.discription = discription;
        this.date = date;
        this.priority = priority;
    };

    get priority(){
        return this._priority;
    }

    set priority(value){
        this._priority = value;
    }

};