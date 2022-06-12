import Image from 'next/image';
import React from 'react';

type PlayerAvatarProps = {
  player: Player;
};

const PlayerAvatar: React.FC<PlayerAvatarProps> = ({ player }) => {
  if (!player?.picture?.url) {
    return null;
  }

  return (
    <figure className="relative w-16 h-16 flex-shrink-0 mx-auto">
      <Image
        className="rounded-full"
        src={player.picture.url}
        alt={player.shortname}
        layout="fill"
      />
      {!!player?.country?.picture?.url && (
        <div className="absolute bottom-1.5 -right-2 block h-6 w-8">
          <Image
            src={player.country.picture.url}
            alt={player.shortname}
            layout="fill"
          />
        </div>
      )}
    </figure>
  );
};

export default PlayerAvatar;
