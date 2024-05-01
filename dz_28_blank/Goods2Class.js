class Goods2 extends Goods {
    constructor(sale) {
        super();
        this.sale = sale ;
    }
    draw() {
        return this.sale;
    }
}