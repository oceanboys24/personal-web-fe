"use client";
import DashboardPageComponent from "@/components/dashboard/DashboardComponent";
import { FormProvider, useForm } from "react-hook-form";

export default function DashboardPage() {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
     <DashboardPageComponent/>
    </FormProvider>
  );
}
