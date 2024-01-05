import React, { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import "../styles.css";
import Header from "@/components/Header";

const List = dynamic(() => import("../components/HabitList"), { ssr: false });

function HabitList() {
  return (
    <>
      <Header />
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-center text-2xl mb-4">我的习惯列表</h1>
        <List />
      </div>
    </>
  );
}

export default HabitList;
