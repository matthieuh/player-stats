import { FC, useMemo } from 'react';

import PlayerMatchRow from 'components/PlayerMatchRow';

type PlayerMatchesListProps = {
  player: Player;
  matches: Match[];
};

const PlayerMatchesList: FC<PlayerMatchesListProps> = ({
  player,
  matches = [],
}) => {
  const rows = useMemo(
    () =>
      matches
        .slice()
        .sort((a, b) => b.startTime.localeCompare(a.startTime))
        .map((match) => (
          <li key={match.id} data-testid={`player-match-row-${match.id}`}>
            <PlayerMatchRow player={player} match={match} />
          </li>
        )),
    [matches, player]
  );

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul role="list" className="divide-y divide-gray-200">
        {rows}
      </ul>
    </div>
  );
};

export default PlayerMatchesList;
