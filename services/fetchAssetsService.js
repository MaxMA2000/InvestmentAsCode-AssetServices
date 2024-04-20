const axios = require('axios');

const environment = process.env.NODE_ENV || 'dev';
const config = require('../config.json');
const DAL_URL = config[environment].INVESTMENTASCODE_DAL_URL;


const fetchAssets = async (type) => {
  const url = `${DAL_URL}/data/v1/asset`
  const response = await axios.get(url)
  return response;
}

const fetchAssetsByType = async (type) => {
  const url = `${DAL_URL}/data/v1/asset/byType?type=${type}`
  const response = await axios.get(url)
  return response;
}

const fetchAssetsBySymbol = async (symbol) => {
  const url = `${DAL_URL}/data/v1/asset/bySymbol?symbol=${symbol}`
  const response = await axios.get(url)
  return response;
}


module.exports = {
  fetchAssets,
  fetchAssetsByType,
  fetchAssetsBySymbol
};
