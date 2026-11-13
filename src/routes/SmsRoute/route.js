import express from "express";

const route = express.Router()

import SendSmsController from "../../controller/SmsController/SendSmsController/SendSmsController.js";

route.post("/sms/send" , SendSmsController)

export default route