import { Rabbit } from "@/lib/types";
import { RabbitIcon } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { useRabbitStore } from "@/store/useRabbitStore";

export default function RabbitItem(props: Rabbit) {
  const { delete: deleteRabbit } = useRabbitStore();
  return (
    <div className="flex flex-col border border-black rounded-2xl items-center w-50 py-4">
      <div className="flex gap-2 items-center">
        <RabbitIcon />
        <h1 className="text-2xl">{props.name}</h1>
      </div>

      <p>Age: {props.age}</p>
      <p>Color: {props.color}</p>
      <p>Weight: {props.weight}</p>
      <p>{props.gender}</p>
      <Button className="mt-4" onClick={() => deleteRabbit(props.id)}>
        Delete
      </Button>
    </div>
  );
}
