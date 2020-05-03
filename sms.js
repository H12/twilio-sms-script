const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const from = process.env.TWILIO_NUMBER;

const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

function buildMsgSender(to) {
    return function message(body) {
        return client.messages.create({ from, to, body });
    }
}
