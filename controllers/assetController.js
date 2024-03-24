const express = require('express');
const axios = require('axios');

const environment = process.env.NODE_ENV || 'dev';
const config = require('../config.json');
const DAL_URL = config[environment].INVESTMENTASCODE_DAL_URL;

console.log(`environemnt = ${environment}`)
console.log(`DAL_URL = ${DAL_URL}`)


const router = express.Router();

router.get('/v1/asset', async (req, res) => {
  try {
    console.log("sending request to get all assets");
    const response = await axios.get(`${DAL_URL}/data/v1/asset`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/v1/asset/byType', async (req, res) => {
  try {
    const type = req.query.type;
    console.log(`sending request to get assets by type: ${type}`);
    const response = await axios.get(`${DAL_URL}/data/v1/asset/byType?type=${type}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
