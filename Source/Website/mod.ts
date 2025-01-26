
import { createRoot } from 'react-dom/client'
import { App } from './App'


const { body } = document

const root = createRoot(body)

const node = App()

root.render(node)
