import dotenv from 'dotenv';

dotenv.config();

// To be accessible across app
const config = {};

config.port = process.env.PORT;

config.dbUsername = process.env.DB_USERNAME;
config.dbPassword = process.env.DB_PASSWORD;

config.jwtEncryption = process.env.JWT_ENCRYPTION;
config.jwtExpiration = process.env.JWT_EXPIRATION;

config.facebookId = process.env.FACEBOOK_ID;
config.facebookSecret = process.env.FACEBOOK_SECRET;

config.googleId = process.env.GOOGLE_ID;
config.googleSecret = process.env.GOOGLE_SECRET;

export default config;
