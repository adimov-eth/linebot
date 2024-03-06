import express from 'express';
import * as line from '@line/bot-sdk';

import { config } from './config';
import bodyParser from 'body-parser';


const app = express()

const lineConfig = {
  channelAccessToken: config.line.channelAccessToken,
  channelSecret: config.line.channelSecret
}

console.log(lineConfig);

app.use(line.middleware(lineConfig))

app.get('/', (req, res) => {
  console.log('Hello, World!');
  res.send('Hello, World!');
});




app.post('/webhook', (req, res) => {
    console.log(req.body.events)
    res.json(req.body.events) 
});


// app.use('/webhook', line.middleware(config.line));
// app.use(bodyParser.json());
    // Promise.all(req.body.events.map(handleLineWebHook)).then((result) => res.json(result));


const client = new line.messagingApi.MessagingApiClient({
  channelAccessToken: config.line.channelAccessToken,
});

function handleEvent(event: any) {
    if (event.type !== 'message' || event.message.type !== 'text') {
        return Promise.resolve(null);
    }

    return client.replyMessage({
        replyToken: event.replyToken,
        messages: [{
            type: 'text',
            text: event.message.text
        }],
    });
}

app.listen(3000);