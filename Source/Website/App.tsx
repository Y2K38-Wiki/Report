
export { App }

import { QueryClientProvider , QueryClient } from '@tanstack/react-query'
import { Search } from './Search'


const client = new QueryClient({
    defaultOptions : {
        queries : {
            refetchOnWindowFocus : false
        }
    }
})


function App (){

    return (
        <QueryClientProvider client = { client } >
            <Search />
        </QueryClientProvider>
    )
}
