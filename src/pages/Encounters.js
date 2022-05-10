import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import getPokemonEncounters from "../services/getPokemonEncounters"


const Encounters = () => {

    const {id} = useParams()
    const [encounters, setEncounters] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getPokemonEncounters(id)
            .then((res) => {
                setEncounters(res.data)
            })
    }, [id])

    const ordenarEncounter = (str) => {
        let arr = str.split('-')
        arr.splice(0,0,'Region:')
        arr.splice(2, 0, 'and Area:')
        let len = (arr.length -1)
        arr.splice(len, 1)
        arr = arr.join(" ")
        return arr
    }

    const encountersList = encounters.map((e) => <h2 key={e.location_area.url} > {ordenarEncounter(e.location_area.name)} </h2>)

  return (
  <div>
      {encountersList}
      <button onClick={() => navigate(-1)} >Go back</button>
  </div>
)
}

export default Encounters