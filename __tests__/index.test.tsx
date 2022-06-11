import { render, screen, within } from '@testing-library/react';
import Home from 'pages/index';
import players from './fixtures/players';

describe('Home', () => {
  it('renders a heading', () => {
    const { getByRole } = render(<Home players={[]} />);

    const heading = getByRole('heading', {
      name: 'Players',
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders expected number of players', () => {
    const { getAllByTestId } = render(<Home players={players} />);

    const rows = getAllByTestId(/^player-row-*/);

    expect(rows.length).toBe(3);
  });

  it('renders expected player stats', () => {
    const { getByTestId } = render(<Home players={players} />);

    const playerRowOne = getByTestId(`player-row-${players[0].id}`);

    expect(playerRowOne).toBeInTheDocument();
    expect(within(playerRowOne).getByTestId('rank')).toHaveTextContent('21');
    expect(within(playerRowOne).getByTestId('fullname')).toHaveTextContent(
      'Stan Wawrinka'
    );
    expect(within(playerRowOne).getByTestId('height')).toHaveTextContent(
      '1.83 m'
    );
    expect(within(playerRowOne).getByTestId('weight')).toHaveTextContent(
      '81 kg'
    );
    expect(within(playerRowOne).getByTestId('points')).toHaveTextContent(
      '2,143'
    );
  });
});
