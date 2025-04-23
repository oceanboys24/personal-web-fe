import FooterComponent from "./Section/Footer";
import MainContent from "./Section/MainContent";
import NavbarComponent from "./Section/Navbar";

export default function LayoutComponent() {
  return (
    <div className="bg-white w-screen h-screen overflow-x-hidden ">
      <NavbarComponent />
      <MainContent />
      <FooterComponent />
    </div>
  );
}
