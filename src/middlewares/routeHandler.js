import { Database } from "../database/database.js";
import { routes } from "../routes/index.js";

const database = new Database()

export function routeHandler(request, response) {
    const route = routes.find((route)=>{
        return route.method === request.method && route.path.test(request.url)
    })

    if(route) {
        const routeParams = request.url.math(route.path)
        const {params} = routeParams.groups || {}

        request.params = params

        return route.controller({request, response, database})
    }

    return response.writeHead(404).end("Not found")
}