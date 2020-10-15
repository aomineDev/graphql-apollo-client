import { gql } from '@apollo/client'

export const CharactersQuery = gql`
  {
  characters {
    results {
      id
      name
    }
  }
}`



