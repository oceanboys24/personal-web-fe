import LoginComponent from "../login/Login";
import { Toaster } from "../ui/sonner";

export default function LayoutLogin() {
  return (
    <div className="w-screen h-screen flex justify-center items-center ">
      <Toaster />
      <LoginComponent />
    </div>
  );
}
