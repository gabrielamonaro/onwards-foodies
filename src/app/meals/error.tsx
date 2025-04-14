"use client";

type ErrorMealsPageProps = {
  error: {
    message: string;
  };
};

export default function ErrorMealsPage(params: ErrorMealsPageProps) {
  return (
    <div className="text-center text-white">
      An error occurred.
      <p>{params.error.message}</p>
    </div>
  );
}
