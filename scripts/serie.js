var Serie = /** @class */ (function () {
    function Serie(id, name, channel, seasons, description, platform, image) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.platform = platform;
        this.image = image;
    }
    Serie.prototype.getID = function () {
        return this.id;
    };
    Serie.prototype.getName = function () {
        return this.name;
    };
    Serie.prototype.getChannel = function () {
        return this.channel;
    };
    Serie.prototype.getSeasons = function () {
        return this.seasons;
    };
    Serie.prototype.getDescription = function () {
        return this.description;
    };
    Serie.prototype.getPlatform = function () {
        return this.platform;
    };
    Serie.prototype.getImage = function () {
        return this.image;
    };
    return Serie;
}());
export { Serie };
