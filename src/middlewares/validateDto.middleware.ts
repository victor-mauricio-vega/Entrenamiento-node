import { Request, Response, NextFunction } from "express";
import { validate, Validate } from "class-validator";
import { plainToInstance } from "class-transformer";

export function ValidateDto(DtoClass: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const instance = plainToInstance(DtoClass, req.body);
    const errors = await validate(instance);
    if (errors.length > 0) {
      const messages = errors
        .map((e) => Object.values(e.constraints || {}))
        .flat();
      return res.status(400).json({ errors: messages });
    }
    req.body = instance;
    next();
  };
}
