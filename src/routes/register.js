import { create } from "../controller/register/create.js";
import { index } from "../controller/register/index.js";
import { remove } from "../controller/register/remove.js";
import { update } from "../controller/register/update.js";

export const register = [
    {
        method: "POST",
        path: "/register",
        controller: create,
    },
    {
        method: "GET",
        path: "/register",
        controller: index,
    },
    {
        method: "PUT",
        path: "/register/:id",
        controller: update
    },
    {
        method: "DELETE",
        path: "/register/:id",
        controller: remove
    }
]