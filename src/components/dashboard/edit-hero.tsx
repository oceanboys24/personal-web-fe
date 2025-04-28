import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";

export default function EditHero() {
  return (
    <Card className="w-[450px] min-h-[450px] ">
      <CardHeader>
        <CardTitle className="text-center">Edit Hero</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-3">
          <Input type="text" placeholder="Surname" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="CV Link" />
          <Input type="text" placeholder="Profession" />
          <Textarea className="max-h-30" placeholder="Description" />
          <Input type="text" placeholder="Location" />
          <div className="flex items-center space-x-2">
            <Switch id="available" />
            <Label htmlFor="available">Is Available</Label>
          </div>
          <div className="grid items-center gap-1.5">
            <Input id="picture" type="file" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="w-full flex   justify-end">
          <Button>Save Changes</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
