module.exports = {
    requestMW: (req,res,next) => {
        console.log('requestmiddleware')
        next()
    },
    addProduct: (req,res) => {
        const{product_name, price, image} = req.query
        console.log(req.query)
        const db = req.app.get('db')
        db.add({product_name,price,image})
        .then(products => res.status(200).send(products))
        .catch(err => console.log(err))
    },
    getProduct: (req,res) => {
        const{id} = req.query
        console.log(req.query)
        const db = req.app.get('db')
        db.get({id})
        .then(product => res.status(200).send(product))
        .catch(err => console.log(err))
    },
    editProduct: (req,res) => {
        const{id,product_name} = req.query
        console.log(req.query)
        const db = req.app.get('db')
        db.edit({id,product_name})
        .then(product => res.status(200).send(product))
        .catch(err => console.log(err))
    },
    deleteProduct: (req,res) => {
        const{id} = req.query
        console.log(req.query)
        const db = req.app.get('db')
        db.delete({id})
        .then(products => res.status(200).send(products))
        .catch(err => console.log(err))
    }
}