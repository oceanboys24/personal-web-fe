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

export default function LoginComponent() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="dark:text-white">Login CMS</CardTitle>
        <CardDescription>Please Login to access Dashboard</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-3">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="example@gmail.com" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="email" type="password" placeholder="***********" />
            </div>
            <div className="flex flex-col space-y-1.5"></div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center ">
        <Button className="w-full dark:bg-white dark:text-black">Login</Button>
      </CardFooter>
    </Card>
  );
}
