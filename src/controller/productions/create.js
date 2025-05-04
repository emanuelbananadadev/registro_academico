import {randomUUID } from "node:crypto"

export function create({request, response, database}) {
    const {titulo , ano, tipo} = request.body

    const production = {
        id: randomUUID(),
        titulo, 
        ano,
        tipo,
        status: "Ativo",
        created_at: new Date(),
        updated_at: new Date(),

    }

    database.insert("productions", production)

    return response.writeHead(201).end(JSON.stringify(production))
}