import Image from 'next/image';
import { FC } from 'react';
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
  return (
    <tr>
      <td className="w-4 whitespace-nowrap px-3 font-medium text-gray-900">
        {formatNumber(player.stats.rank)}
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
      <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
        {player.firstname} {player.lastname}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {formatAge(player.stats.age)}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {formatHeight(player.stats.height)}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {formatWeight(player.stats.weight)}
      </td>
      <td className="whitespace-nowrap pl-3 py-4 text-sm text-gray-500">
        {formatNumber(player.stats.points)}
      </td>
    </tr>
  );
};

export default PlayerRow;
