import { z } from "zod";

const Rabbit = z.object({
  id: z.number(),
  name: z.string().min(1, "Rabbit's name must contains anything"),
  age: z.number().min(1, "Rabbit's age must be positive"),
  weight: z.number().min(1, "Rabbit's weight must be positive"),
  color: z.string().min(1, "Rabbit's color must contains anything"),
  gender: z.enum(["Male", "Female"]),
});

export type Rabbit = z.infer<typeof Rabbit>;

export type RabbitStore = {
  rabbits: Rabbit[];
  born(rabbit: Rabbit): void;
  delete(id: number): void;
};
