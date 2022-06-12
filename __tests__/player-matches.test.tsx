import { render } from '@testing-library/react';
import PlayerMatches from 'pages/players/[id]/matches';
import players from './fixtures/players';
import matches from './fixtures/matches';

describe('Home', () => {
  it('renders a heading', () => {
    const { getByRole } = render(
      <PlayerMatches player={players[0]} matches={matches} />
    );

    const heading = getByRole('heading', {
      name: 'Stan Wawrinka matches:',
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders expected number of matches', () => {
    const { getAllByTestId } = render(
      <PlayerMatches player={players[0]} matches={matches} />
    );

    const rows = getAllByTestId(/^player-match-row-*/);

    expect(rows.length).toBe(22);
  });

  it('renders expected wins/losses number', () => {
    const { getByTestId } = render(
      <PlayerMatches player={players[0]} matches={matches} />
    );

    const winRate = getByTestId('winRate');

    expect(winRate).toBeInTheDocument();
    expect(winRate).toHaveTextContent('15W / 7L');
  });
});
