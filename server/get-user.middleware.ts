

import {Request, Response, NextFunction} from 'express';
import { decodeJwt } from './security.utils';


export function retreiveUserIdFromRequest(req: Request, res: Response, next: NextFunction) {

    const jwt = req.cookies["SESSIONID"];

    console.log(jwt);

    if(jwt) {

        handleSessionCookie(jwt, req)
            .then(()=> next())
            .catch((err)=> {

                console.log(err);
                next();
            })

    } else {
        next();
    }



}

async function handleSessionCookie(jwt: string, req: Request) {

    try {

        const payload = await  decodeJwt(jwt);

        req["userId"] = payload.sub;

        console.log(req['userId']);
    
    } catch(ex) {

        console.log('error: could not extract user ', ex.message);

    }
    
}