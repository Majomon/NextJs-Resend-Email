"use client";
import React from "react";

const handlerSubmit = async () => {
  const res = await fetch("/api/send", {
    method: "POST",
  });
  const data = await res.json();
  console.log(data);
};

function HomePage() {
  return (
    <div className="h-screen bg-slate-900 flex items-center justify-center text-white">
      <button
        className="bg-sky-500 px-3 py-2 border"
        onClick={() => handlerSubmit()}
      >
        Enviar email
      </button>
    </div>
  );
}

export default HomePage;
