import { parseRoutePath } from "../utils/parseRoutePath.js"
import { productions } from "./productions.js"
import { register } from "./register.js" 

export const routes = [...productions, ...register].map((route)=> ({
    ...route,
    path: parseRoutePath(route.path),
}))