import express from 'express';
import config from 'config';

const server = express();
const Port = config.get('port');
 
function start () {
    try {
        server.listen( Port, () => console.log(`Server has been staered on ${Port} port`))
    } catch (error) {
        console.log(`Server error ${error.message}`);
        process.exit(1);
    }
}

start();
