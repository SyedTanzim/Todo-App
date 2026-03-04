export class TodoGenerator{
    constructor(title, description, date, priority, id = crypto.randomUUID()){
        this.id = id;
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