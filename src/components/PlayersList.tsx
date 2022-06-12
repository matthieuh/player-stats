import { FC, useMemo } from 'react';

import PlayerRow from 'components/PlayerRow';

type PlayersProps = {
  players: Player[];
};

const PlayersList: FC<PlayersProps> = ({ players = [] }) => {
  const rows = useMemo(
    () =>
      players
        .slice()
        .sort((a, b) => a.stats.rank - b.stats.rank)
        .map((player) => <PlayerRow key={player.id} player={player} />),
    [players]
  );

  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          ></th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          ></th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Players
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Age
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Height
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Weight
          </th>
          <th
            scope="col"
            className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
          >
            Points
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">{rows}</tbody>
    </table>
  );
};

export default PlayersList;
