import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import PokeItem from "../components/PokeItem"
import Search from "../components/Search"
import getAllPokemons from "../services/getAllPokemons"
import getPokemonByType from "../services/getPokemonByType"

const PokemonList = () => {

    const [pokemons, setPokemons] = useState([])
    const [arrOffsetPosition, setArrOffsetPosition] = useState(((Math.random()) * (1106 - 0)) + 0)
   
      
    const [searchValue, setSearchValue] = useState('')
    const [isType, setIsType] = useState(false)
    const [typeValue, setTypeValue] = useState('')
    const navigate = useNavigate()
    const userName = useSelector((state) => state.userName)


    const handlerType= (typeValue, isAType) => {
      setTypeValue(typeValue)
      setIsType(isAType)
    }

    const handlerSearch = (searchValue) => {
      setSearchValue(searchValue)
    }

    useEffect(() => {
        getAllPokemons(arrOffsetPosition)
            .then((res) => {
                setPokemons(res.data.results)
            })
    }, [arrOffsetPosition])

    useEffect(() => {
      if (isType === true){
        getPokemonByType(typeValue)
          .then((res) => {
            setPokemons(res.data.pokemon)
          })
      }
    }, [isType, typeValue])

    useEffect(() => {
      if(isType === false){
        navigate(`/pokedex/${searchValue}`)
      }
    },[searchValue, isType, navigate])

    const list = pokemons.map((e) =>{
      
      if (e.pokemon){
        return <PokeItem key={e.pokemon.url} url={e.pokemon.url}/>
      } 
      return <PokeItem key={e.name} url={e.url}/>
    })


  return (
    <div>
        <h1>Welcome to the Pokedex, trainer {userName} </h1>
        <Search handlerSearch={handlerSearch} handlerType={handlerType} />
        {list}
        {arrOffsetPosition === 0 ? <button onClick={() => setArrOffsetPosition(arrOffsetPosition + 20)} >Next 20</button>: <><button onClick={() => setArrOffsetPosition(arrOffsetPosition - 20)} >prev 20</button><button onClick={() => setArrOffsetPosition(arrOffsetPosition + 20)} >Next 20</button></>}
        
    </div>
  )
}

export default PokemonList