
export { App }

import { useSearch } from './Fuse'


function App (){

    const { search } = useSearch()

    return (
        <div>
            Testing
        </div>
    )
}
