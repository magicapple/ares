// 新的 HabitForm 组件
import React, { useState, useRef, useEffect } from "react";
import { addHabit } from "../services/db";

function HabitForm() {
  // 定义习惯的名称和描述的状态
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // 定义处理输入变化的函数
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(event.target.value);
  };

  // 定义处理表单提交的函数
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    addHabit(name, description);
    console.log(name, description);
    // 清空输入框
    setName("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-2">
        <label htmlFor="name" className="font-bold">
          习惯名称：
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={handleNameChange}
          required
          className="p-2 border rounded"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label htmlFor="description" className="font-bold">
          习惯描述：
        </label>
        <textarea
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          className="p-2 border rounded"
        />
      </div>
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        提交
      </button>
    </form>
  );
}

export default HabitForm;
