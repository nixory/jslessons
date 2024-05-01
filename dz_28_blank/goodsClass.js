class Goods {
    constructor(name, amount, img, count) {
        this.name = name;
        this.amount = amount;
        this.img = img;
        this.count = count;
    }
    draw() {
        return  `<div> <img src="${this.img}" alt=""> ${this.name} ${this.amount}</div>`
    }
}