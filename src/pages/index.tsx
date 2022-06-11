import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';

import apolloClient from 'lib/apollo';
import GET_ALL_PLAYERS from 'queries/getAllPlayers';

type HomeProps = {
  players: Player[];
};

const Home: NextPage<HomeProps> = ({ players = [] }) => {
  return (
    <div>
      {players.map((player) => (
        <div key={player.id}>
          <h1>
            {player.firstname} {player.lastname}
          </h1>
          <Image
            src={player.picture.url}
            alt={player.shortname}
            width={120}
            height={120}
          />
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await apolloClient.query({
    query: GET_ALL_PLAYERS,
  });

  return {
    props: {
      players: data?.players,
    },
  };
};

export default Home;
