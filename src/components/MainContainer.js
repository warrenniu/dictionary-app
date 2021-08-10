import { useStoreResponse } from '../components/totalContext/TotalContext'

function MainContainer() {

    const store = useStoreResponse()
    console.log(store)

    const renderDefinitions = (meanings) =>{
        return meanings.map(meaning =>{
            <div key={meaning.partOfSpeech}>
            <h1>Part of Speach: {meaning.partOfSpeech}</h1>
            <ul>
                    {meaning.definitions.map(definition =>{
                        <li>{definition.definition}</li>
                    })}
                </ul>
                </div>
        })
    }

    return (
        <div>
            <h1>Main Container</h1>
            {store > 1 ?
            <div>  
                <h1> {store[0].word} </h1>
                {renderDefinitions(store.meanings)} 
             </div>
             : null}
          
        </div>
    )
}

export default MainContainer
