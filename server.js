"use strict";

import * as Hapi from '@hapi/hapi'
import { client } from './db-client.js';


const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    })

    server.route({
        method: "GET",
        path:'/',
        handler: async (request, h) => {
         const coffee = await client.select('*').from('cafe');
           
            return JSON.stringify(coffee[0])
        }
    })

    await server.start();
    console.log('Server running on %s', server.info.uri);

    process.on('unhandledRejection',(err) => {
        console.log(err);
        process.exit(1)
    })
}

init();