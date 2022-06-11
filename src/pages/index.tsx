import type { GetStaticProps, NextPage } from 'next';

import apolloClient from 'lib/apollo';
import GET_ALL_PLAYERS from 'queries/getAllPlayers';
import PlayersList from 'components/PlayersList';

type HomeProps = {
  players: Player[];
};

const Home: NextPage<HomeProps> = ({ players = [] }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate pb-6">
        Players
      </h2>
      <div className="overflow-x-auto">
        <PlayersList players={players} />
      </div>
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
