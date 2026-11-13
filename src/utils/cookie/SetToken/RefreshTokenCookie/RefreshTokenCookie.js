export default async function RefreshTokenCookie(res, refreshToken) {
  try {
    const SetRefreshTokenCookie = res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
      path: "/",
      priority: "high",
    });

    return SetRefreshTokenCookie
  } catch (error) {
    return res.status(500).json(`کوکی رفرش توکن نشست نکرد ${error}`)
  }
}
