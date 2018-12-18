class Season {
    constructor(premiereDate, endDate) {
        this.premiereDate = premiereDate
        this.endDate = endDate
    }

    getInfo() {
        if (this.premiereDate == null) {
            return 'Coming soon...'
        } else {
            return ` ${this.premiereDate} - ${this.endDate}`;
        }
    }
}

export default Season;

