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
        this.app.use(cors);
        //Public directory
        this.app.use(express.static('public'));
    }

    //Routes
    routes() {
        this.app.get('/api', (req, res) => {
            res.json({
                msg: 'Get API'
            })
        });
        this.app.put('/api', (req, res) => {
            res.json({
                msg: 'Put API'
            })
        });
        this.app.post('/api', (req, res) => {
            res.status(201).json({
                msg: 'Post API'
            })
        });
        this.app.delete('/api', (req, res) => {
            res.json({
                msg: 'Delete API'
            })
        });
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Server runing on the port: ', this.port);
        })
    }
}

module.exports = Server;