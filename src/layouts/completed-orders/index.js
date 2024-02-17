import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function CompletedOrders() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <h1>welcome to CompletedOrders</h1>
      <Footer />
    </DashboardLayout>
  );
}

export default CompletedOrders;
