import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import apolloClient from 'lib/apollo';
import GET_ALL_PLAYER_IDS from 'queries/getAllPlayerIds';
import GET_ALL_PLAYERS from 'queries/getAllPlayers';
import GET_ALL_MATCHES from 'queries/getAllMatches';
import PlayerMatchesList from 'components/PlayerMatchesList';

type PlayerDetailsProps = {
  player: Player;
  matches: Match[];
};

const PlayerDetails: NextPage<PlayerDetailsProps> = ({ player, matches }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate pb-6">
        {player.firstname} {player.lastname} matches
      </h2>
      <div className="overflow-x-auto">
        <PlayerMatchesList player={player} matches={matches} />
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: GET_ALL_PLAYER_IDS,
  });

  const paths = data.players.map((player: Player) => ({
    params: { id: player.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const [{ data: playersData }, { data: matchesData }] = await Promise.all([
    apolloClient.query({
      query: GET_ALL_PLAYERS,
    }),
    apolloClient.query({
      query: GET_ALL_MATCHES,
    }),
  ]);

  const player = playersData.players.find(
    (player: Player) => player.id === params?.id
  );
  const matches = matchesData.matches.filter((match: Match) =>
    match.players.find((player: Player) => player.id === params?.id)
  );

  return {
    props: {
      player,
      matches,
    },
  };
};

export default PlayerDetails;
