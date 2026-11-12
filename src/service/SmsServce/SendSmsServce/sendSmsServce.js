import SendSMSWithPattern from "../../../utils/SmsPanel/ConnectToSmsPanel.js";
import { SendOtpCode } from "../../../repository/OtpRepositroy/otpRepository.js";
import crypto from "crypto";

export default async function SendSmsServce(userData) {
  try {
    const { userPhoneNumber } = userData;

    const generateCode = crypto.randomInt(100000 * 1000000).toString();

    const resId = await SendSMSWithPattern(userPhoneNumber, generateCode);

    const otpModel = await SendOtpCode(userPhoneNumber, generateCode);

    return { resId, otpModel };
  } catch (error) {
    throw error;
  }
}
