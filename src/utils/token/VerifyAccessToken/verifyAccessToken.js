import jwt from "jsonwebtoken";

export default async function VerifyAccessToken(token) {
  try {
    const verifyAccessToken = jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET_KEY,
    );

    return verifyAccessToken;
  } catch (error) {
    return null;
  }
}
