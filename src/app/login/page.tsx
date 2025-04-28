"use client";
import LayoutLogin from "@/components/layout/LayoutLogin";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {


  return (
    <div>
      <LayoutLogin />
    </div>
  );
}
