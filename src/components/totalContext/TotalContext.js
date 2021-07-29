import React, { useContext, useState } from 'react';

const FetchWordContext = React.createContext()
const StoreResponseContext = React.createContext()

//Hooks
export function useFetchHandler() {
    return useContext(FetchWordContext)
}
export function useStoreResponse() {
    return useContext(StoreResponseContext)
}


export function TotalProvider({ children }) {

    const [storeResponse, setStoreResponse] = useState([])

    const fetchHandler = async (word) => {
        try {
            const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
            const json = await data.json()
            console.log(json)

        } catch (e) {
            console.error(e)
        }
    }


    return (

        <StoreResponseContext.Provider value={storeResponse}>
            <FetchWordContext.Provider value={fetchHandler}>
                {children}
            </FetchWordContext.Provider>
        </StoreResponseContext.Provider>
    )

}