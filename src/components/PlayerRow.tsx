import Image from 'next/image';
import { FC, useMemo } from 'react';
import {
  formatAge,
  formatHeight,
  formatNumber,
  formatWeight,
} from 'utils/format';

type PlayerRowProps = {
  player: Player;
};

const PlayerRow: FC<PlayerRowProps> = ({ player }) => {
  const rank = useMemo(() => formatNumber(player.stats.rank), [player]);
  const age = useMemo(() => formatAge(player.stats.age), [player.stats.age]);
  const height = useMemo(
    () => formatHeight(player.stats.height),
    [player.stats.height]
  );
  const weight = useMemo(
    () => formatWeight(player.stats.weight),
    [player.stats.weight]
  );
  const points = useMemo(
    () => formatNumber(player.stats.points),
    [player.stats.points]
  );

  return (
    <tr data-testid={`player-row-${player.id}`}>
      <td className="w-4 whitespace-nowrap px-3 font-medium text-gray-900" data-testid="rank">
        {rank}
      </td>
      <td className="w-16 whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
        <figure className="relative w-16 h-16 flex-shrink-0 mx-auto">
          <Image
            className="rounded-full"
            src={player.picture.url}
            alt={player.shortname}
            layout="fill"
          />
          <div className="absolute bottom-1.5 -right-2 block h-6 w-8">
            <Image
              src={player.country.picture.url}
              alt={player.shortname}
              layout="fill"
            />
          </div>
        </figure>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900" data-testid="fullname">
        {player.firstname} {player.lastname}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500" data-testid="age">
        {age}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500" data-testid="height">
        {height}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500" data-testid="weight">
        {weight}
      </td>
      <td className="whitespace-nowrap pl-3 py-4 text-sm text-gray-500" data-testid="points">
        {points}
      </td>
    </tr>
  );
};

export default PlayerRow;
