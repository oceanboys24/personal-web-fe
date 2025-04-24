import FooterComponent from "../home/Footer";
import MainContent from "../home/MainContent";
import NavbarComponent from "../home/Navbar";

export default function LayoutComponent() {
  return (
    <div className="bg-white w-screen min-h-screen  dark:bg-gray-900 ">
      <NavbarComponent />
      <MainContent />
      <FooterComponent />
    </div>
  );
}
