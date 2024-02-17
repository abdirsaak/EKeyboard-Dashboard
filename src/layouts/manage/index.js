import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Manage() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <h1>welcome to manage</h1>
      <Footer />
    </DashboardLayout>
  );
}

export default Manage;
