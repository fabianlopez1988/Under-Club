const path = require('path');

module.exports = {
  apps: [
    {
      name: 'client',
      cwd: path.join(__dirname, 'client'),
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'api',
      cwd: path.join(__dirname, 'api'),
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};

