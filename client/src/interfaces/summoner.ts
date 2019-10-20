import league from './league';

interface summoner {
  version: string,
  name: string,
  level: number,
  image: string,
  soloq: league,
  flexq: league
}

export default summoner;
