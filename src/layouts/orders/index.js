import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

function Orders() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <h1>welcome to orders</h1>
      <Footer />
    </DashboardLayout>
  );
}

export default Orders;
