const TIME = 75e5;
const MINUTE = 60e3;
const { Client } = require('discord.js');
const moment = require('moment');
const client = new Client();

let channel;
let time_channel;

let days = {
    'Monday'    : 'Pazartesi',
    'Tuesday'   : 'Salı',
    'Wednesday' : 'Çarşamba',
    'Thursday' 	: 'Perşembe',
    'Friday' 	: 'Cuma',
    'Saturday' 	: 'Cumartesi',
    'Sunday' 	: 'Pazar',
};

client.on('ready', () => {
    channel = client.channels.get(process.env.CHANNEL_ID);
    time_channel = client.channels.get(process.env.TIME_ID);

    channel.send('!d bump').catch(e => console.log('FAILED: ', e));

    client.channels.get(process.env.VOICE)
    .join()
    .catch(console.error);
});

setInterval(() => {
    channel.send('!d bump').catch(e => console.log('FAILED: ', e));
}, TIME);

setInterval(() => {
	let now = moment();
	let dddd = now.format('dddd');

	time_channel.setName(`Bekleme〝・〰・〞Odası`);
}, MINUTE);

client.login(process.env.TOKEN);
