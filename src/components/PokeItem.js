import { useEffect, useState } from "react"
import getInfoByUrl from "../services/getInfoByUrl"
import PokeType from "./PokeType"
import { Link } from "react-router-dom"

const PokeItem = ({url}) => {

    const [pokeObj, setPokeObj] = useState({})
    const [pokeImg, setPokeImg] =useState('')
    const [pokeType, setPoketype] = useState([])
    const [hp, setHp] = useState(0)
    const [pokeId, setPokeId] = useState(null)
    const [defense, setDefense] = useState(0)
    const [attack, setAtack] = useState(0)
    const [speed, setSpeed] = useState(0)

    useEffect(() => {
        getInfoByUrl(url)
            .then((res) => {
                setPokeObj(res.data)
                setPokeImg(res.data.sprites.front_default)
                setPoketype(res.data.types)
                setHp(res.data.stats[0].base_stat)
                setPokeId(res.data.id)
                setAtack(res.data.stats[1].base_stat)
                setDefense(res.data.stats[2].base_stat)
                setSpeed(res.data.stats[5].base_stat)
            })
    }, [url])

  return (
    <Link to={`/pokedex/${pokeId}` } >
      <div style={{margin: '15px', backgroundColor: '#333', borderRadius: '8px'}} > 
        <img src={pokeImg} alt={pokeObj.name} />
        <h1>{pokeObj.name}</h1>
        {pokeType.map((item) => <PokeType key={item.slot} type={item.type} />)}
        <h2>HP: {hp}</h2>
        <h2>ATTACK: {attack}</h2>
        <h2>DEFENSE: {defense}</h2>
        <h2>SPEED: {speed}</h2>
      </div>
    </Link>
  )
}

export default PokeItem