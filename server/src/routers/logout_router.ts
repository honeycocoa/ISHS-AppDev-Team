import { NextFunction, Request, Response } from "express";

const logoutRouter = require('express').Router();

logoutRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
    req.session.destroy(() => console.log("Session destroyed"));
    res.status(200).send();
});