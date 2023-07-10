const jwt = require('jsonwebtoken')

const getToken = (payload, secretKey, expiresIn) => {
  const token = jwt.sign(payload, secretKey, { expiresIn });
  return token;
}

const verifyToken = (token, secretKey) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    throw new Error('Invalid token');
  }
}

const refreshToken = (payload, secretKey, expiresIn) => {
  const token = jwt.sign(payload, secretKey, { expiresIn });
  return token;
}

const decodeToken=(token)=>{
  try {
    const decoded = jwt.decode(token);
   return(decoded);
  } catch (error) {
    return(error);
  }
}

function getTokenExpirationDate(token) {
  const decodedToken = jwt.decode(token);

  if (!decodedToken || !decodedToken.exp) {
    throw new Error('Invalid token');
  }

  const expirationDate = new Date(decodedToken.exp * 1000);
  return expirationDate;
}

//Token Revocation
//Token Encryption
//Token Blacklisting
//Token Refresh Token Pairing

module.exports = {
  getToken, 
  verifyToken, 
  refreshToken,
  decodeToken,
  getTokenExpirationDate
}