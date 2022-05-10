import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const Login = () => {

    const [userName, setUserName] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handlerOnClick = () => {
        dispatch({
            type: '@user/login',
            payload: userName
        })
        navigate('/pokedex')
    }

  return (
    <div>
        <h1>Tell me your name trainer:</h1>
        <input type="text" onChange={(e)=> setUserName(e.target.value)} />
        <button onClick={handlerOnClick} >Login</button>
    </div>
  )
}

export default Login