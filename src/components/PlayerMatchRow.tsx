import { FC, useMemo } from 'react';
import { formatDate, formatDuration } from 'utils/format';
import PlayerAvatar from './PlayerAvatar';

type PlayerMatchRowProps = {
  player: Player;
  match: Match;
};

const PlayerMatchRow: FC<PlayerMatchRowProps> = ({ player, match }) => {
  const isWin = useMemo(
    () => match.winner.id === player.id,
    [match.winner, player.id]
  );
  const opponent = useMemo(
    () => match.players.find((p) => p.id !== player.id) as Player,
    [match.players]
  );

  const date = useMemo(() => formatDate(match.startTime), [match.startTime]);
  const duration = useMemo(
    () => formatDuration(match.startTime, match.endTime),
    [match.startTime, match.endTime]
  );

  return (
    <div className="flex items-center px-4 py-4 sm:px-6">
      <div className="min-w-0 flex-1 flex items-center">
        <div className="flex-shrink-0 mx-4 mr-8">
          <PlayerAvatar player={opponent} />
        </div>

        <p className="text-sm font-medium text-grey-600 truncate">
          {opponent.firstname} {opponent.lastname}
        </p>
      </div>
      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
        <p className="text-sm font-medium text-grey-400 truncate">{date}</p>
      </div>
      <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
        <p className="text-sm font-medium text-grey-400 truncate">{duration}</p>
      </div>
      <div>
        <span
          className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-${
            isWin ? 'green' : 'red'
          }-100 text-${isWin ? 'green' : 'red'}-800`}
        >
          {isWin ? 'Win' : 'Loss'}
        </span>
      </div>
    </div>
  );
};

export default PlayerMatchRow;
