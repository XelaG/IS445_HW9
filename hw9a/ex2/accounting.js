module.exports.Account =  class Account {
    constructor(n) {
        this.name = n;
        this.balance = 0;
    }

    credit(nb) {
        this.balance = nb;
    }

    describe() {
        return `owner: ${this.name}, balance: ${this.balance}`
    }
}