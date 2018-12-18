class Genre {
    constructor(name) {
        this.name = name;
    }
    getData() {
        const firstAndLastLetter = this.name[0] + this.name[this.name.length - 1];
        return firstAndLastLetter.toUpperCase();
    }
}
export default Genre;