# Twilio SMS Script

## Description
This is a simple script built to enable sending SMS through the terminal via the twilio api.

## Prerequisites
In order to use the script, you need the `twilio` npm package installed:

```bash
npm install -g twilio
```

And you need to ensure you have the following environment variables set up appropriately:

`TWILIO_SID`
`TWILIO_TOKEN`
`TWILIO_NUMBER`

These refer to your Twilio account's SID, Auth Token, and a valid Twilio number, respectively.

## Usage
Here's an example of how this script would be used from the node repl:

```javascript
> .load ./sms.js

> toFakePerson = sender('+15555555555')

> toFakePerson('Some message')
```

The above would result in the phone number +15555555555 receiving an SMS reading "Some message".
