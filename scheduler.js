module.exports = {
    init,
    schedule,
    unschedule
};

const { scheduleJob } = require('node-schedule');

const db = require('./db');
const {startTrackStats} = require('./controller');
const jobs = {};

var client = null;

async function init(_client) {
    client = _client;
    startTrackStats(client);
}

async function schedule(channelId, cron, mode, time) {
    await db.schedule(channelId, cron, mode, time);
    cancelJob(channelId);
    createJob(channelId, cron, mode, time);
}

async function unschedule(channelId) {
    await db.unschedule(channelId);
    cancelJob(channelId);
}

function createJob(channelId, cron, mode, time) {
    let job = scheduleJob(cron, () => {
        let channel = client.channels.cache.get(channelId);
        if (channel) {
            channel.send(`!wz stats ${mode ? mode : 'br'} ${time ? time : '1d'}`);
        }
    });
    jobs[channelId] = job;
}

function cancelJob(channelId) {
    let job = jobs[channelId];
    if (job) {
        job.cancel();
    }
}