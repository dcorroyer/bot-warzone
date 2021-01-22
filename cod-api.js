module.exports = {
    login,
    getPlayerProfile,
    getBattleRoyaleInfo,
    getBattleRoyaleMatchs
};

require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const API = require("call-of-duty-api")({ platform: "battle" });

async function login(){
    await API.login(process.env.API_USERNAME, process.env.API_PASSWORD);
}

async function getPlayerProfile(platform, username) {
    try {
        await API.MWBattleData(username, platform);
        return { username, platform };
    } catch (Error) {
        console.log(Error)
        return false;
    }
}

async function getBattleRoyaleInfo(platform, username) {
    try {
        let data = await API.MWBattleData(username, platform);
        return data.br;
    } catch (e) {
        console.error(e)
        return null;
    }
}

async function getBattleRoyaleMatchs(platform, username) {
    try {
        let data = await API.MWcombatwz(username, platform);
        return data.matches;
    } catch (e) {
        console.error(e)
        return null;
    }
}