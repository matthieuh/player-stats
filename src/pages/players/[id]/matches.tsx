import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import apolloClient from 'lib/apollo';
import GET_ALL_PLAYER_IDS from 'queries/getAllPlayerIds';
import GET_ALL_PLAYERS from 'queries/getAllPlayers';
import GET_ALL_MATCHES from 'queries/getAllMatches';
import PlayerMatchesList from 'components/PlayerMatchesList';
import { useMemo } from 'react';

type PlayerDetailsProps = {
  player: Player;
  matches: Match[];
};

const PlayerDetails: NextPage<PlayerDetailsProps> = ({ player, matches }) => {
  const winsNb = useMemo(
    () => matches.filter((m) => m.winner.id === player.id).length,
    [player, matches]
  );
  const losesNb = useMemo(() => matches.length - winsNb, [winsNb, matches]);

  return (
    <div>
      <div className="flex gap-2 items-baseline pb-6">
        <h2 className="flex-1 text-2xl font-bold leading-7 text-gray-900 sm:truncate">
          {player.firstname} {player.lastname} matches:
        </h2>
        <p className="px-4">
          <span className="text-green-600">{winsNb}W</span>
          <span className="text-slate-400"> / </span>
          <span className="text-red-600">{losesNb}L</span>
        </p>
      </div>
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
