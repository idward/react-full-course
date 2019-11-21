const express = require('express');
const webpack = require('webpack');
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const webpackConfig = require('../webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

// set config info into process.env
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const stripe = require('stripe')(process.env.STRIPE_KEY);

const app = express();

const port = process.env.PORT || 4000;

// bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// compress(gzip)
app.use(compression());

// static assets
app.use(express.static(path.resolve(__dirname, '../dist')));

const compiler = webpack(webpackConfig);

// webpackDevMiddleware
app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
    writeToDisk: true,
  }),
);

// webpackHotMiddleware
app.use(webpackHotMiddleware(compiler));

app.post('/payment', (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: 'usd',
  };

  stripe.charges.create(body, (stripeErr, stripeRes) => {
    if (stripeErr) {
      res.status(500).send({ error: stripeErr });
    } else {
      res.status(200).send({ success: stripeRes });
    }
  });
});

app.get('**', (req, res) => {
  console.log('url', req.url);
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
