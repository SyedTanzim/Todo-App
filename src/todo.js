export class TodoGenerator{
    constructor(title, description, date, priority){
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.date = date;
        this.priority = priority;
    }

    get priority(){
        return this._priority;
    }

    set priority(value){
        this._priority = value;
    }
};