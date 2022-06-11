enum Sex {
  MAN = 'MAN',
  WOMAN = 'WOMAN',
}

interface Player {
  id: string;
  firstname: string;
  lastname: string;
  shortname: string;
  sex: Sex;
  picture: Picture;
  country: Country;
  stats: Stats;
}
