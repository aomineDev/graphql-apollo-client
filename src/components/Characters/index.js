import React from 'react'
import { useQuery } from '@apollo/client'

import { CharactersQuery } from '../../graphql/queries'

import Character from '../Character'

function Characters () {
  const { loading, error, data } = useQuery(CharactersQuery)

  if (loading) return <p>Loading...</p>

  if (error) return <p>Error :(</p>

  return (
    <>
      <h2>Rick and morty API</h2>
      {data.characters.results.map(character => (
        <Character key={character.id} {...character} />
      ))}
    </>
  )
}

export default Characters