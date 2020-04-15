module.exports = {
  apps : [{
    name: 'API',
    script: './index.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    instances: "max",
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
};
