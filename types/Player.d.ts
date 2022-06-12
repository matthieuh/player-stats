interface Player {
  id: string;
  firstname?: string;
  lastname?: string;
  shortname?: string;
  sex?: 'MAN' | 'WOMAN';
  picture?: Picture;
  country?: Country;
  stats?: Stats;
}
