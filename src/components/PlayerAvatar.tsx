import Image from "next/image";
import React from "react";

type PlayerAvatarProps = {
  player: Player;
  size?: number;
}

const PlayerAvatar: React.FC<PlayerAvatarProps> = ({ player, size = 16 }) => {
  return (
    <figure className={`relative w-${size} h-${size} flex-shrink-0 mx-auto`}>
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
  );
};

export default PlayerAvatar;
