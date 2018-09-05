export class Tool{    
    icon: string;
    idtool: Number;
    name: string;
    text: string;
    url: string;

    copyInto(json) {
        for (let key in json) {
            if (this.hasOwnProperty(key)) {
                console.log(key);
                this[key] = json[key];
            }
        }
    }

    getName() {
        let name:String = this.name;
        name.charAt(0).toUpperCase() + name.slice(1);
        return name;
    }
}

export class App {    
    icon:string;
    idtool:Number;
    name:string;
    options: Array<Tool>;
    text:string;
    url:string;

    copyInto(json) {
        for (let key in json) {
            if (this.hasOwnProperty(key)) {
                this[key] = json[key];
            }
        }
    }

    getName() {
        let name:string = this.name;
        name.charAt(0).toUpperCase() + name.slice(1);
        return name;
    }
}
