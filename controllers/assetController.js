const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/v1/asset', async (req, res) => {
  try {
    console.log("sending request to get all assets");
    const response = await axios.get('http://localhost:8080/data/v1/asset');
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
    const response = await axios.get(`http://localhost:8080/data/v1/asset/byType?type=${type}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
