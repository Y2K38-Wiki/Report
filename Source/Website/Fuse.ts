
export { useSearch }

import { Expression } from 'fuse.js'
import Fuse from 'fuse.js'


const index = [{
    a : 'b'
}]


function useSearch (){

    const fuse = new Fuse(index,{
        isCaseSensitive : false ,
        shouldSort : true
    })


    const search = fuse.search.bind(fuse)

    return { search }
}
