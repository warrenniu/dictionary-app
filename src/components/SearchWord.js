import { useState } from 'react'
import { useSetStoreResponse } from '../components/totalContext/TotalContext'


function SearchWord() {

    const [word, setWord] = useState('')
    const setStore = useSetStoreResponse()
    console.log(word)
    const changeHandler = (e) => {
        setWord(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            const json = await data.json()
            console.log(json)
            setStore(json)
        } catch (e) {
            console.error(e)
        }
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
                    onClick={handleSubmit}
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchWord
