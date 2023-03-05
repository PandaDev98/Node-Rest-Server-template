const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares
        this.middlewares();
        //Routes
        this.routes();

    }
    middlewares() {
        //CORS
        this.app.use(cors());

        //Body parsing and read
        this.app.use(express.json());

        //Public directory
        this.app.use(express.static('public'));
    }

    //Routes
    routes() {
        this.app.use('/api/users', require('../routes/user'));

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server runing on the port: ', this.port);
        })
    }
}

module.exports = Server;