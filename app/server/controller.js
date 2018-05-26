module.exports = {
    get: ( req, res ) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_houses()
            .then( houses => res.status(200).send( houses ) )
            .catch( () => res.status(500).send() );
    },

    create: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const data = req.body;

        dbInstance.create_house({ 
            name: data.name, 
            address: data.address, 
            city: data.city, 
            state: data.state, 
            zip: data.zip 
        }).then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },

    delete: ( req, res ) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.delete_house( params.id )
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    }
}