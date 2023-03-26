import  jwt  from "jsonwebtoken";
import { devConfig } from "../../config/env/development";
//import { Jwt } from "jsonwebtoken";
//var jwt = require('jsonwebtoken');

export default {
  issue(payload, expiresIn){
    //console.log(jwt);
    return jwt.sign(payload, devConfig.secret, expiresIn);
  },
};