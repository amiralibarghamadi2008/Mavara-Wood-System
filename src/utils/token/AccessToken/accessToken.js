import jwt from "jsonwebtoken";
import crypto from "crypto";
import "dotenv/config"

export default async function AccessToken(res, userData) {
  try {
    const accessToken = jwt.sign(
      {
        UserId: userData._id,
        UserFullName: userData.fullName,
        UserRole: userData.role,
        Jti: crypto.randomUUID(),
      },
      process.env.ACCESS_TOKEN_SECRET_KEY,
      {expiresIn : "10m"}
    );

    return accessToken
  } catch (erorr) {
    return res.status(500).json("خطا در ساخت اکسس توکن");
  }
}
