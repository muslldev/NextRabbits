import { RabbitStore } from "@/lib/types";
import { create } from "zustand";

export const useRabbitStore = create<RabbitStore>((set) => ({
  rabbits: [
    {
      id: 1,
      name: "John",
      age: 12,
      weight: 23,
      color: "Black",
      gender: "Male",
    },
    {
      id: 2,
      name: "Jane",
      age: 15,
      weight: 25,
      color: "White",
      gender: "Female",
    },
    {
      id: 3,
      name: "Jim",
      age: 10,
      weight: 20,
      color: "Brown",
      gender: "Male",
    },
    {
      id: 4,
      name: "Jill",
      age: 11,
      weight: 22,
      color: "Black",
      gender: "Female",
    },
    {
      id: 5,
      name: "Jack",
      age: 13,
      weight: 24,
      color: "White",
      gender: "Male",
    },
  ],
  born: (rabbit) =>
    set((state) => ({
      rabbits: [...state.rabbits, rabbit],
    })),
  delete: (id) =>
    set((state) => ({
      rabbits: state.rabbits.filter((rabbit) => rabbit.id !== id),
    })),
}));
