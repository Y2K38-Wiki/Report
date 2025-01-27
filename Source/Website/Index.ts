
export type { Index , Entry }
export { useIndex }

import { useQuery } from '@tanstack/react-query'


type Index = Array<Entry>

interface Entry {

    merges : 0
    issues : 0

    name : string
    file : string
}


function useIndex (){
    return useQuery({
        queryKey : [ 'Index' ] ,
        queryFn : async () => {

            const response = await fetch(`/index.json`)

            const json = await response.json()

            return json as Index
        }
    })
}
