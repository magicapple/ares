// HabitList.tsx
import React, { useEffect, useState } from "react";
import { Habit } from "../types";
import {
  getAllHabits,
  incrementFailureCount,
  incrementSuccessCount,
  ready,
} from "../services/db";

const HabitList: React.FC = () => {
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    fetchHabits();
  }, []);

  const fetchHabits = async () => {
    await ready();
    console.log("ready");
    const data: Habit[] = await getAllHabits();
    console.log(data);
    setHabits(data);
  };

  const successHandle = async (id: number | undefined) => {
    if (id !== undefined) {
      await incrementSuccessCount(id);
      fetchHabits();
    }
  };

  const failureHandle = async (id: number | undefined) => {
    if (id !== undefined) {
      await incrementFailureCount(id);
      fetchHabits();
    }
  };

  return (
    <ul className="space-y-4">
      {habits.map((habit) => (
        <li key={habit.id} className="border p-4 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl">{habit.title}</h2>
            <div>
              <span className="text-green-500 text-lg mr-4">
                {habit.successCount}
              </span>
              <span className="text-red-500 text-lg">{habit.failureCount}</span>
            </div>
          </div>
          <p className="mb-4">{habit.description}</p>
          <div className="flex space-x-2">
            <button
              onClick={() => successHandle(habit.id)}
              className="p-2 bg-green-500 text-white rounded"
            >
              成功
            </button>
            <button
              onClick={() => failureHandle(habit.id)}
              className="p-2 bg-red-500 text-white rounded"
            >
              失败
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default HabitList;
