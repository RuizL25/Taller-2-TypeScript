export class Serie{
    id :number;
    name : string;
    channel:string
    seasons:number ;
    description:string;
    platform:string;
    image:string;
    constructor(id:number, name:string, channel:string, seasons:number ,  description:string, platform:string,  image:string)
    {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.platform = platform;
        this.image = image;
    }

    getID():number{
        return this.id;
    }

    getName():string{
        return this.name;
    }

    getChannel():string{
        return this.channel;
    }

    getSeasons():number{
        return this.seasons;
    }
    getDescription():string{
        return this.description;
    }

    getPlatform():string{
        return this.platform;
    }
    getImage():string{
        return this.image;
    }
}

