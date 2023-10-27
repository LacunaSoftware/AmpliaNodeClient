require('dotenv').config();
const Config = {
	AMPLIA_ENDPOINT: process.env.AMPLIA_ENDPOINT,
	AMPLIA_API_KEY: process.env.AMPLIA_API_KEY,
	AMPLIA_CA_ID: process.env.AMPLIA_CA_ID,
};

exports.Config = Config;