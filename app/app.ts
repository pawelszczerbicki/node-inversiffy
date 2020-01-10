import "reflect-metadata";
import container from "./container"
import * as bodyParser from 'body-parser';
import {InversifyExpressServer} from 'inversify-express-utils';
import {Application} from "express";
import * as cors from "cors";

const config = (app: Application) => {
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(cors())
};

new InversifyExpressServer(container)
    .setConfig(config)
    .build().listen(process.env.PORT || 3000);
