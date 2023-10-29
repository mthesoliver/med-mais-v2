const PROXY_CONFIG = [
    {
        context: ['/medicos'],
        target: 'https://spring-test-api-39e777ec7215.herokuapp.com/',
        secure: true,
        changeOrigin: true,
        pathRewrite:{ "^/" : "" }
    }
];

module.exports = PROXY_CONFIG;


//