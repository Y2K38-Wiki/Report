
export { useSearch }

import { Expression } from 'fuse.js'
import { useIndex } from './Index'

import Fuse from 'fuse.js'


function useSearch (){

    const index = useIndex()

    const entries = index.data ?? []

    const all = entries.map(( entry , index ) => {
        return {
            refIndex : index ,
            item : entry
        }
    })

    const fuse = new Fuse(entries,{
        minMatchCharLength : 1 ,
        isCaseSensitive : false ,
        shouldSort : true ,
        keys : [ 'name' ]
    })

    const search = ( query : string ) => {

        if( query.length === 0 )
            return all

        return fuse.search(query)
    }

    return { search }
}
