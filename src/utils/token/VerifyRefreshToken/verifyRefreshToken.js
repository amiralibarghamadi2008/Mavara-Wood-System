import jwt from "jsonwebtoken";

export default async function VerifyRefreshToken(token) {
  try {
    const verifyRefreshToken = jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET_KEY,
    );

    return verifyRefreshToken;
  } catch (error) {
    return null;
  }
}
