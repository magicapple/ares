import React from "react";
import Link from "next/link";
import RootLayout from "@/app/layout";
import "../styles.css";

function HomePage() {
  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-t from-blue-500 to-green-500 text-black">
        <div className="text-center bg-white p-8 rounded shadow-lg max-w-md m-4">
          <h1 className="text-4xl mb-4 truncate">
            习惯养成器 <span className="text-sm text-gray-500">V0.0.5</span>
          </h1>
          <p className="text-xl mb-8 overflow-ellipsis overflow-hidden">
            这是一个习惯养成的项目，你可以添加和查看你的习惯。
          </p>
          <nav className="flex flex-col space-y-4 mt-8">
            <Link href="/habit-form">
              <span className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                添加一个新的习惯
              </span>
            </Link>
            <Link href="/habit-list">
              <span className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                查看我的习惯列表
              </span>
            </Link>
          </nav>
        </div>
      </div>
    </RootLayout>
  );
}

export default HomePage;
