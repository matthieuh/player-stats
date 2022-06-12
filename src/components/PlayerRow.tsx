import Link from 'next/link';
import { FC, useMemo } from 'react';
import {
  formatAge,
  formatHeight,
  formatNumber,
  formatWeight,
} from 'utils/format';
import PlayerAvatar from './PlayerAvatar';

type PlayerRowProps = {
  player: Player;
};

const PlayerRow: FC<PlayerRowProps> = ({ player }) => {
  const rank = useMemo(
    () => player?.stats?.rank && formatNumber(player.stats.rank),
    [player?.stats?.rank]
  );
  const age = useMemo(
    () => player?.stats?.age && formatAge(player.stats.age),
    [player?.stats?.age]
  );
  const height = useMemo(
    () => player?.stats?.height && formatHeight(player.stats.height),
    [player?.stats?.height]
  );
  const weight = useMemo(
    () => player?.stats?.weight && formatWeight(player.stats.weight),
    [player?.stats?.weight]
  );
  const points = useMemo(
    () => player?.stats?.points && formatNumber(player.stats.points),
    [player?.stats?.points]
  );

  return (
    <tr data-testid={`player-row-${player.id}`}>
      <td
        className="w-4 whitespace-nowrap px-3 font-medium text-gray-900"
        data-testid="rank"
      >
        {rank}
      </td>
      <td className="w-16 whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
        <PlayerAvatar player={player} />
      </td>
      <td
        className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900"
        data-testid="fullname"
      >
        {player.firstname} {player.lastname}
      </td>
      <td
        className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
        data-testid="age"
      >
        {age}
      </td>
      <td
        className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
        data-testid="height"
      >
        {height}
      </td>
      <td
        className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
        data-testid="weight"
      >
        {weight}
      </td>
      <td
        className="whitespace-nowrap pl-3 py-4 text-sm text-gray-500"
        data-testid="points"
      >
        {points}
      </td>
      <td>
        <Link href={`/players/${player.id}/matches`} passHref>
          <a
            type="button"
            className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Matches
          </a>
        </Link>
      </td>
    </tr>
  );
};

export default PlayerRow;
