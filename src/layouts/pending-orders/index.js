import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function PendingOrders() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <h1>welcome to PendingOrders</h1>
      <Footer />
    </DashboardLayout>
  );
}

export default PendingOrders;
