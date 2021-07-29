import {useState} from 'react'
import {useFetchHandler} from '../components/totalContext/TotalContext'
function SearchWord() {
    
    const [word,setWord ] = useState('')
    
    console.log(word)
    const changeHandler = (e) =>{
        setWord(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        useFetchHandler(word)

        setWord('')
    }
    return (
        <div>
            <form>
                <input 
                    type="text" 
                    name="wordSearch" 
                    onChange={changeHandler}
                />
                <button
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchWord
