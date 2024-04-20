const express = require('express');
const router = express.Router();

const fetchAssetsService = require('../services/fetchAssetsService');
const getErrorMessageService = require('../services/getErrorMessageService');


router.get('/v1/asset', async (req, res) => {
  try {
    console.log("sending request to get all assets");
    const response = await fetchAssetsService.fetchAssets();
    res.json(response.data);
  } catch (error) {
    console.error(error);

    const dalErrorMsg = getErrorMessageService.getDalErrorMessage(error);

    res.status(500).json({
      error: `Having Error Fetching Results from DAL`,
      dal_error_message: dalErrorMsg
    });
  }
});

router.get('/v1/asset/byId', async (req, res) => {
  try {
    const id = req.query.id;
    console.log(`sending request to get assets by id: ${id}`);
    const response = await fetchAssetsService.fetchAssetsById(id);
    res.json(response.data);
  } catch (error) {
    console.error(error);

    const dalErrorMsg = getErrorMessageService.getDalErrorMessage(error);

    res.status(500).json({
      error: `Having Error Fetching Results from DAL`,
      dal_error_message: dalErrorMsg
    });
  }
});


router.get('/v1/asset/byType', async (req, res) => {
  try {
    const type = req.query.type;
    console.log(`sending request to get assets by type: ${type}`);
    const response = await fetchAssetsService.fetchAssetsByType(type);
    res.json(response.data);
  } catch (error) {
    console.error(error);

    const dalErrorMsg = getErrorMessageService.getDalErrorMessage(error);

    res.status(500).json({
      error: `Having Error Fetching Results from DAL`,
      dal_error_message: dalErrorMsg
    });
  }
});


router.get('/v1/asset/bySymbol', async (req, res) => {
  try {
    const symbol = req.query.symbol;
    console.log(`sending request to get assets by symbol: ${symbol}`);
    const response = await fetchAssetsService.fetchAssetsBySymbol(symbol);
    res.json(response.data);
  } catch (error) {
    console.error(error);

    const dalErrorMsg = getErrorMessageService.getDalErrorMessage(error);

    res.status(500).json({
      error: `Having Error Fetching Results from DAL`,
      dal_error_message: dalErrorMsg
    });
  }
});


module.exports = router;
