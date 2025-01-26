
import { writeFile , readdir } from 'node:fs/promises'
import { fromError } from 'zod-validation-error'
import { parse } from '@std/toml'
import { join } from 'node:path'
import { z } from 'zod'


const IssueOrMerge = z.object({
    Closed : z.boolean() ,
    Url : z.string()
})

const Project = z.object({

    Name : z.string() ,

    Description : z.string() ,

    Links : z.object({
        Repository : z.string().optional() ,
        Website : z.string().optional()
    }),

    Issue : z.array(IssueOrMerge).optional() ,
    Merge : z.array(IssueOrMerge).optional()
})


const index = new Array<{
    name : string
    file : string
}>()


const directory = import.meta.dir

const root = join(directory,'..','..')

const data = join(root,'Data')

const projects = join(data,'Projects')

const names = await readdir(projects)

for ( const name of names ){

    const path = join(projects,name)

    const file = Bun.file(path)

    const toml = await file.text()

    const blob = parse(toml)

    const data = await Project
        .parseAsync(blob)
        .catch(( exception ) => {
            console.error(`Failed to parse '${ name }'\n${ fromError(exception).toString() }`)
            return null
        })

    if( ! data )
        continue

    index.push({
        name : data.Name ,
        file : name.split('.').at(0)!
    })
}


console.log(`Indexed ${ index.length } projects`)


const output_path = join(root,'WWW','index.json')

const output_file = Bun.file(output_path)

const json = JSON.stringify(index)

await output_file.write(json)

