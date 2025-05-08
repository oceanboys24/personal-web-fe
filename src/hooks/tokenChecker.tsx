"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function TokenChecker() {
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      const token = Cookies.get("token");
      if (!token) {
        router.push("/login");
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return null;
}
