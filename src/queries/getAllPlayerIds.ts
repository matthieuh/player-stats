import { gql } from '@apollo/client';

export default gql`
  query getAllPlayers {
    players {
      id
    }
  }
`;
