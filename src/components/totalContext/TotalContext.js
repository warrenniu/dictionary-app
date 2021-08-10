import React, { useContext, useState } from 'react';

const FetchWordContext = React.createContext()
const StoreResponseContext = React.createContext()
const SetStoreResponseContext = React.createContext()

//Hooks
export async function useFetchHandler() {
    return useContext(FetchWordContext)
}
export function useStoreResponse() {
    return useContext(StoreResponseContext)
}
export function useSetStoreResponse(){
    return useContext(SetStoreResponseContext)
}


export function TotalProvider({ children }) {

    const [storeResponse, setStoreResponse] = useState([])

    function setState(jsonResponse){
        setStoreResponse(jsonResponse)
    }

    async function fetchHandler(word) {
        
            try {
                const data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
                const json = await data.json()
                setStoreResponse(json)
    
            } catch (e) {
                console.error(e)
            }
        
    }


    return (
        <StoreResponseContext.Provider value={storeResponse}>
            <FetchWordContext.Provider value={fetchHandler}>
                <SetStoreResponseContext.Provider value={setState}>
                {children}
                </SetStoreResponseContext.Provider>
            </FetchWordContext.Provider>
        </StoreResponseContext.Provider>
    )

}