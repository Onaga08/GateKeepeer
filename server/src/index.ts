import express, { Request, Response } from 'express';
import config from './config';

const app = express();

app.get('/healthcheck', (req, res) => {
    const healthcheck = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now(),
    };
    try {
      return res.json(healthcheck);
    } catch (e) {
      return res.status(503).send();
    }
  });

app.get('/', (req, res) => {
    try {
      return res.json({project:"GateKeeper"});
    } catch (e) {
      return res.status(503).send();
    }
  });
app
    .listen(config.port, () => {
      console.log(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️
      ################################################
    `);
    })
    .on('error', err => {
      console.error(err);
      process.exit(1);
    });