const players: Player[] = [
  {
    id: 'player-1',
    firstname: 'Stan',
    lastname: 'Wawrinka',
    shortname: 'S.WAW',
    sex: 'MAN',
    country: {
      picture: {
        url: 'https://i.eurosport.com/_iss_/geo/country/flag/medium/2213.png',
      },
      code: 'SUI',
    },
    picture: {
      url: 'https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg',
    },
    stats: {
      rank: 21,
      points: 2143,
      weight: 81000,
      height: 183,
      age: 33,
    },
  },
  {
    id: 'player-2',
    firstname: 'Rafael',
    lastname: 'Nadal',
    shortname: 'R.NAD',
    sex: 'MAN',
    country: {
      picture: {
        url: 'https://i.eurosport.com/_iss_/geo/country/flag/medium/2203.png',
      },
      code: 'ESP',
    },
    picture: {
      url: 'https://i.eurosport.com/_iss_/person/pp_clubteam/large/435121.jpg',
    },
    stats: {
      rank: 4,
      points: 7525,
      weight: 85000,
      height: 185,
      age: 33,
    },
  },
  {
    id: 'player-3',
    firstname: 'Novak',
    lastname: 'Djokovic',
    shortname: 'N.DJO',
    sex: 'MAN',
    country: {
      picture: {
        url: 'https://i.eurosport.com/_iss_/geo/country/flag/medium/6944.png',
      },
      code: 'RS',
    },
    picture: {
      url: 'https://i.eurosport.com/_iss_/person/pp_clubteam/large/565920.jpg',
    },
    stats: {
      rank: 1,
      points: 8770,
      weight: 77000,
      height: 188,
      age: 35,
    },
  },
];

export default players;
