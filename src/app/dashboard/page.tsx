"use client";
import { FormProvider, useForm } from "react-hook-form";

export default function DashboardPage() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <div className="h-full">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-3xl">Welcome To Dashboard</h1>
        </div>
      </div>
    </FormProvider>
  );
}
