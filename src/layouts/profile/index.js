import Footer from "examples/Footer";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Header from "layouts/profile/components/Header";

function Profile() {
  return (
    <DashboardLayout>
      <Header />
      <h1>profile</h1>

      <Footer />
    </DashboardLayout>
  );
}

export default Profile;
