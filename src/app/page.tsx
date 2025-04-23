import LayoutComponent from "@/components/Layout";
import NavbarComponent from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Pages() {
  return (
    <div>
      <LayoutComponent>
        <NavbarComponent />
        <h1 className="underline bg-blue-500">Hallo</h1>
        <Button> Testing </Button>
      </LayoutComponent>
    </div>
  );
}
