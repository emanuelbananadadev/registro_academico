import { create } from "../controller/productions/create.js";
import { index } from "../controller/productions/index.js";
import { remove } from "../controller/productions/remove.js";
import { update } from "../controller/productions/update.js";

export const productions = [
    {
        method: "POST",
        path: "/productions",
        controller: create
    },
    {
        method: "GET",
        path: "/productions",
        controller: index
    },
    {
        method: "PUT",
        path: "/productions/:id",
        controller: update
    },
    {
        method: "DELETE",
        path: "/productions/:id",
        controller: remove
    }
]