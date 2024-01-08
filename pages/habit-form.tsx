import React, { useState, useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import "../styles.css";
import Header from "@/components/Header";
const Form = dynamic(() => import("../components/HabitForm"), { ssr: false });

function HabitForm() {
  return (
    <>
      <Header />

      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-center text-2xl mb-4">添加一个新的习惯</h1>
        <Form />
      </div>
    </>
  );
}

export default HabitForm;
