
export { Search }

import { FormEvent , useState } from 'react'
import { useSearch } from './Fuse'


function Search (){

    const { search } = useSearch()

    const [ query , setQuery ] = useState<string>('')

    const results = search(query)

    const items = results.map(( result ) => {

        return (
            <div key = { result.refIndex } >
                <p>
                    { result.item.name }

                    <br/>

                    [ I : { result.item.issues } | M : { result.item.merges } ]
                </p>
            </div>
        )
    })

    const onInput = ( event : FormEvent<HTMLInputElement> ) => {
        setQuery(event.currentTarget.value)
    }

    return (
        <div>

            <input
                onInput = { onInput }
                value = { query }
                type = 'string'
            />

            <div>
                { items }
            </div>
        </div>
    )
}
