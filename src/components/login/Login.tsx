"use client";
import { Button } from "../ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

import SpinnerButton from "./components/Spinner";
import useLogin from "./hooks/useLogin";

export default function LoginComponent() {
  const { onSubmit, handleSubmit, register, errors, isPending } = useLogin();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="w-[350px] dark:bg-black">
        <CardHeader>
          <CardTitle className="dark:text-white">Login CMS</CardTitle>
          <CardDescription>Please Login to access Dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-3">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="example@gmail.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...register("password")}
                placeholder="**********"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5"></div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center ">
          <Button
            className="w-full dark:bg-white dark:text-black"
            type="submit"
            disabled={isPending}
          >
            {isPending ? <SpinnerButton /> : "Login"}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
