import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

import summoner from './client/src/interfaces/summoner';

const app = express();
const port = process.env.port || 5000;

const API_KEY = process.env.API_KEY;
const serverNames: {[id: string]: string} = {
  "EUNE" : "eun1",
  "EUW" : "euw1",
  "NA" : "na1",
  "LAN" : "la1",
  "LAS" : "la2",
  "OCE" : "oce1",
  "KR" : "kr",
  "RU" : "ru",
  "BR" : "br1",
  "TR" : "tr1"
};
const divDict: {[id: string]: number} = {
  "I" : 1,
  "II" : 2,
  "III" : 3,
  "IV" : 4
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const getFromRiotAPI = async(server:string, username:string) => {
  const summonerResponse = await fetch(encodeURI(
    `https://${serverNames[server]}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${username}?api_key=${API_KEY}`
  ));
  const summonerBody = await summonerResponse.json();
  if(summonerResponse.status === 200){
    const leagueResponse = await fetch(encodeURI(
      `https://${serverNames[server]}.api.riotgames.com/lol/league/v4/entries/by-summoner/${summonerBody.id}?api_key=${API_KEY}`
    ));
    const leagueBody = await leagueResponse.json();
    if(leagueResponse.status === 200) {
      let soloq = {
        league: '',
        division: 0,
        lp: 0,
        wins: 0,
        loses: 0
      }
      let flexq = {
        league: '',
        division: 0,
        lp: 0,
        wins: 0,
        loses: 0
      };

      if(leagueBody.length > 0) {
        leagueBody.forEach((e: any) => {
          if(e.queueType === "RANKED_SOLO_5x5") {
            soloq.league = e.tier.toLowerCase();
            soloq.division = divDict[e.rank];
            soloq.lp = e.leaguePoints;
            soloq.wins = e.wins;
            soloq.loses = e.losses;
          } else if(e.queueType === "RANKED_FLEX_SR") {
            flexq.league = e.tier.toLowerCase();
            flexq.division = divDict[e.rank];
            flexq.lp = e.leaguePoints;
            flexq.wins = e.wins;
            flexq.loses = e.losses;
          }
        });
      }

      const response:summoner = {
        version: '9.20.1',
        name: summonerBody.name,
        level: summonerBody.summonerLevel,
        image: summonerBody.profileIconId,
        soloq: soloq,
        flexq: flexq
      }

      return response;
    } else {
      return {err: 2};
    }
  } else {
    return {err: 1};
  }
}

app.get('/api/:server/:username', (req, res) => {
  getFromRiotAPI(req.params.server, req.params.username)
    .then((result) => {
      res.send(result);
    })
    .catch(() => {});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
