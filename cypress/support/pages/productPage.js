import productElements from '../elements/productElements'
const el = new productElements

class product {
    insertIpt(qtt) {
        cy.get(el.iptQtt())
            .clear()
            .type(qtt)
    }
}

export default product