"use client";
import { useFormStatus } from "react-dom";

export default function MealsFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      className="px-8 py-3 bg-gradient-to-r from-[#f9572a] to-[#ff9b05] text-white rounded cursor-pointer text-[1.25rem] shadow-md"
    >
      {pending ? "Loading..." : "Share Meal"}
    </button>
  );
}
