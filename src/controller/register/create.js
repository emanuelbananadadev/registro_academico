import {randomUUID} from "node:crypto"

export function create({request, response, database}) {
    const {nome, email, senha} = request.body

    const user = {
        id: randomUUID(),
        nome,
        email,
        senha,
        status: "Ativo",
        created_at: new Date(),
        updated_at: new Date(),
    }

    database.insert("register", user)

    response.writeHead(201).end(JSON.stringify(user))
}