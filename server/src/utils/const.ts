import {Request} from "express";

export const getAccessToken = (req: Request) => { return req.header('Authorization') }

export const adminAccessToken = "IAmAdmin"