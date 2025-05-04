export function index({request, response, database}) {
    const productions = database.select("productions")

    return response.end(JSON.stringify(productions))
}