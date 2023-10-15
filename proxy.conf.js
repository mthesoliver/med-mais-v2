const PROXY_CONFIG = [
    {
        context: ['/medicos'],
        target: 'http://localhost:8080/',
        secure: false,
        loglevel: 'debug'
    }
];

module.exports = PROXY_CONFIG;