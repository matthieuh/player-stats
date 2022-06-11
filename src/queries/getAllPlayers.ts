import { gql } from '@apollo/client';

export default gql`
  # Write your query or mutation here
  query getAllPlayers {
    players {
      id
      firstname
      lastname
      shortname
      sex
      country {
        picture {
          url
        }
        code
      }
      picture {
        url
      }
    }
  }
`;
