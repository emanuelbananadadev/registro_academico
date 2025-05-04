export function index({request, response, database}) {
    const register = database.select("register")

    return response.end(JSON.stringify(register))
}