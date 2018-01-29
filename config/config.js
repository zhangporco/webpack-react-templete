
/**
 * 开发各自维护
 */
const development = {
    SERVER: {
        DOMAIN: 'http://127.0.0.1:3334',
        PORT: 3334,
    },
    CLIENT: {
        DOMAIN: 'http://127.0.0.1:8080',
    }
};

/**
 * 禁止修改
 */
const production = {
    SERVER: {
        DOMAIN: 'http://127.0.0.1:3334',
        PORT: 3334,
    },
    CLIENT: {
        DOMAIN: 'http://127.0.0.1:8080',
    }
};

let CONFIG;
switch (process.env.NODE_ENV) {
    case 'development':
        CONFIG = development;
        break;
    case 'production':
        CONFIG = production;
        break;
}

export default CONFIG;
