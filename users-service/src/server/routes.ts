import { Express } from "express";
import { getRepository } from "typeorm";

import User from "#root/db/entities/User";

const setupRoutes = (app: Express) => {
  const userRepository = getRepository(User);

  app.get("/users/:userId", async (req, res, next) => {
    try {
      const user = await userRepository.findOne(req.params.userId);

      if (!user) return next(new Error("Invalid user ID!"));

      return res.json(user);
    } catch (err) {
      return next(err);
    }
  });
};

export default setupRoutes;
