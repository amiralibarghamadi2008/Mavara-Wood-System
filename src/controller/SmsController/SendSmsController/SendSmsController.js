import SendSmsService from "../../../service/SmsServce/SendSmsServce/sendSmsServce.js";

export default async function SendSmsController(req, res) {
  try {
    const ReqBody = req.body;

    if (!ReqBody) {
      return res.status(400).json("چیزی ارسال نشد");
    }

    const { phoneNumber } = await SendSmsService(ReqBody);

    if (!phoneNumber) {
      return res.status(400).json("فیلد اجباری هست");
    }

    return res.status(200).json({
      success: true,
      message: `کد تایید باموفیت به شماره ${phoneNumber} ارسال شد`,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "خطای غیر منتظره سرور",
      error,
    });
  }
}
