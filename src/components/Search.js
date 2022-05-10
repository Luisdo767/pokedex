import { useState } from "react"

const Search = ({handlerSearch, handlerType}) => {

    const [inputValue, setInputValue] = useState('')
    const [typeValue, setTypeValue] = useState('')
    const [isAType, setIsAType] = useState(false)

  return (
    <div>
        <input type="text" onChange={(e) => setInputValue(e.target.value.toLowerCase())} />
        <input type="checkbox" id='isByType' onChange={e => setIsAType(e.target.checked)} />
        <select name="types" id="types" onChange={e => setTypeValue(e.target.value)}>
            <option value=""></option>
            <option value="fire">fire</option>
            <option value="water">water</option>
            <option value="poison">poison</option>
            <option value="grass">grass</option>
            <option value="normal">normal</option>
            <option value="flying">flying</option>
            <option value="fighting">fighting</option>
            <option value="ground">ground</option>
            <option value="rock">rock</option>
            <option value="bug">bug</option>
            <option value="ghost">ghost</option>
            <option value="steel">steel</option>
            <option value="electric">electric</option>
            <option value="psychic">psychic</option>
            <option value="ice">ice</option>
            <option value="dragon">dragon</option>
            <option value="dark">dark</option>
            <option value="shadow">shadow</option>
            <option value="fairy">fairy</option>
            <option value="unknown">unknown</option>
        </select>

        {isAType? <button onClick={() => handlerType(typeValue, isAType)} >Search by type</button> : <button onClick={() => handlerSearch(inputValue)} >Search by name</button> }
        
    </div>
  )
}

export default Search