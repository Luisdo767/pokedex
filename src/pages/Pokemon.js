import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import getPokemonById from "../services/getPokemonById"

const Pokemon = () => {

    const {id} = useParams()
    const navigate = useNavigate()
    const [pokeName, setPokeName] = useState('')
    const [pokeImgFront, setPokeImgFront] = useState('')
    const [pokeImgBack, setPokeImgBack] = useState('')
    const [height, setHeight] = useState(0)
    const [abilities, setAbilities] = useState([])
    const [moves, setMoves] = useState([])
    const [weight, setWeight] = useState(0)
    const [number, setNumber] = useState(0)

    useEffect(() => {
        getPokemonById(id)
            .then((res) => {
              setPokeName(res.data.name)
              setPokeImgFront(res.data.sprites.front_default)
              setPokeImgBack(res.data.sprites.back_default)
              setHeight(res.data.height)
              setWeight(res.data.weight)
              setNumber(res.data.id)
              setAbilities(res.data.abilities)
              setMoves(res.data.moves)
            })
    }, [id])

    const abilitiesList = abilities.map((e) => <h3 key={e.ability.url} > {e.ability.name} </h3>)

    const movesList = moves.map((e) => <h3 key={e.move.url} > {e.move.name} </h3>)

  return (
    <div>
        <h1>Number: {number} -- {pokeName}  </h1>
        <br />
        <img src={pokeImgFront} alt="" />
        <img src={pokeImgBack} alt="" />
        <br />
        <h2>Weight: {weight}hg  Height: {height}</h2>
        <br />
        <h3>Abilities:  </h3>
        {abilitiesList}
        <br />
        <h3>Moves:  </h3>
        {movesList}
        <br />

        <button onClick={() => navigate(-1)} >Go back</button>
        <button onClick={() => navigate(`/pokedex/${id}/encounters`)} >Encounters</button>
    </div>
  )
}

export default Pokemon