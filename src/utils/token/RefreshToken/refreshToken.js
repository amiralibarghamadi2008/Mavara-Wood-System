import jwt from "jsonwebtoken";
import crypto from "crypto";
import "dotenv/config"

export default async function RefreshToken(res, userData) {
  try {
    const refreshToken = jwt.sign(
      {
        UserId: userData._id,
        UserFullName: userData.fullName,
        UserRole: userData.role,
        Jti: crypto.randomUUID(),
      },
      process.env.REFRESH_TOKEN_SECRET_KEY,
      {expiresIn : "30d"}
    );

    return refreshToken
  } catch (erorr) {
    return res.status(500).json("خطا در ساخت رفرش توکن");
  }
}
