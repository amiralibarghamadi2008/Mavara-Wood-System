export default async function AccessTokenCookie(res, accessToken) {
  try {
    const SetAccessTokenCookie = res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 30 * 60 * 1000,
      path: "/",
      priority: "high",
    });

    return SetAccessTokenCookie
  } catch (error) {
    return res.status(500).json(`کوکی اکسس توکن نشست نکرد ${error}`)
  }
}
