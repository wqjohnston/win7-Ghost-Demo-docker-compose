
var path = require('path'),
    config;
 
config = {
    production: {
        url: 'http://mytestblog.com',
        mail: {},
        database: {
            client: 'mysql',
            connection: {
                host: 'db',
                user: 'ghost',
                database: 'ghost',
                port: '3306',
                charset: 'utf-8'
            },
            debug: false
        },
        paths: {
            contentPath: path.join(process.env.GHOST_CONTENT,'/')
        },
        server: {
            host: '0.0.0.0',
            port: '2368'
        }
    }
};
module.exports = config;
