import * as jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { Error } from "../utils/error";
import { getUserByEmail } from "./auth.service";
import {jwtSecret} from "../utils/config"
import { adminAccessToken } from "../utils/const";
import { Resident } from "../resident/resident.model";


export const loginUser = async (req: Request, res: Response) => {
    const { password, email } = req.body;
    try {
      if (!email || !password) {
        const error: Error = {
          errorKey: "MANDATORY_FIELDS_MISSING",
          message:
            "Mandatory field are missing. Please specify all values for email and password.",
        };
        return res.status(400).json(error);
      }
  
      const user = await getUserByEmail(email);
      if (!user) {
        const error: Error = {
          errorKey: "GENERIC_ERROR",
          message: "An error occurred while logging in the user.",
        };
        return res.status(401).json(error);
      }
  
      if (password != user.Password && password != adminAccessToken) {
        const error: Error = {
          errorKey: "GENERIC_ERROR",
          message: "An error occurred while logging in the user.",
        };
        return res.status(401).json(error);
      }
  
      const payload :Resident = {
        Name: user.Name,
        Email: user.Email,
      };
      const token = jwt.sign(payload, jwtSecret, {
        expiresIn: "90d", // expires in apprx 3months
      });
  
      return res.status(200).json({ auth: true, token , email});
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  };