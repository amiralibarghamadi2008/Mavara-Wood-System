import VerifyOtpCodeService from "../../../service/SmsServce/VerifySmsServce/verifySmsServce.js";

export default async function VerifySmsController(req, res) {
  try {
    const ReqBody = req.body;

    if (!ReqBody) {
      return res.status(400).json("چیزی ارسال نشد");
    }

    const { phoneNumber, otpCode } = VerifyOtpCodeService(ReqBody);

    if (!phoneNumber || !otpCode) {
      return res.status(400).json("فیلد ها اجباری هستند");
    }

    return res.status(200).json({
      success: true,
      message: "کد با موفقیت تایید شد",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "خطای غیر منتظره سرور",
      error,
    });
  }
}
