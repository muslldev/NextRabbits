"use client";

import { useRabbitStore } from "@/store/useRabbitStore";
import RabbitItem from "./RabbitItem";
import { Button } from "./ui/button";
import { RabbitIcon, X } from "lucide-react";
import { useState } from "react";

export default function RabbitClub() {
  const { rabbits, born } = useRabbitStore();
  const [showForm, setShowForm] = useState<boolean>(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    born({
      id: rabbits.length + 1,
      name: formData.get("name") as string,
      age: Number(formData.get("age") as string),
      weight: Number(formData.get("weight") as string),
      color: formData.get("color") as string,
      gender: formData.get("gender") as string,
    });
    setShowForm(false);
    form.reset();
  };

  return (
    <div className="gap-4 flex flex-col">
      <div className="flex gap-2 flex-wrap">
        {rabbits.map((rabbit) => (
          <RabbitItem key={rabbit.id} {...rabbit} />
        ))}
      </div>

      <Button
        className="w-25"
        variant="outline"
        onClick={() => setShowForm(true)}
      >
        Born <RabbitIcon className="ml-2" />
      </Button>
      {showForm && (
        <div className="fixed inset-0 bg-black opacity-90 flex items-center justify-center z-50">
          <form
            className="bg-white w-full max-w-md h-3/4 flex flex-col gap-4 items-center py-4 rounded-xl"
            onSubmit={handleSubmit}
          >
            <button
              type="button"
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setShowForm(false)}
            >
              <X />
            </button>
            <input
              className="outline outline-green-400 rounded-lg ps-3 h-10"
              type="text"
              name="name"
              placeholder="Name"
              required
            />
            <input
              className="outline outline-green-400 rounded-lg ps-3 h-10"
              type="number"
              name="age"
              placeholder="Age"
              required
            />
            <input
              className="outline outline-green-400 rounded-lg ps-3 h-10"
              type="number"
              name="weight"
              placeholder="Weight"
              required
            />
            <select className="w-[232px]" name="color" required>
              <option value="white">White</option>
              <option value="black">Black</option>
              <option value="brown">Brown</option>
              <option value="spotted">Spotted</option>
              <option value="orange">Orange</option>
            </select>
            <div className="flex gap-4 w-[232px]">
              <label>
                Male <input type="radio" name="gender" value="Male" required />
              </label>
              <label>
                Female <input type="radio" name="gender" value="Female" />
              </label>
            </div>

            <Button type="submit" variant={"outline"}>
              Born <RabbitIcon className="ml-2" />
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
