import { Request, Response, NextFunction } from "express";
import { validate, Validate } from "class-validator";
import { plainToInstance } from "class-transformer";

export function ValidateDto(DtoClass: any, isQuery = false) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const source = isQuery ? req.query : req.body;
    const instance = plainToInstance(DtoClass, source);
    const errors = await validate(instance);

    if (errors.length > 0) {
      const messages = errors
        .map((e) => Object.values(e.constraints || {}))
        .flat();
      return res.status(400).json({ errors: messages });
    }

    if (isQuery) {
      Object.assign(req.query, instance);
    } else {
      req.body = instance;
    }
    next();
  };
}
