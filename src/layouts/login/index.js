/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// // Authentication layout components
// import CoverLayout from "layouts/authentication/components/CoverLayout";

// // Images
// import curved9 from "assets/images/curved-images/curved-6.jpg";

function Login() {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    <SoftBox
      component="form"
      role="form"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <SoftBox mb={2}>
        <SoftBox mb={1} ml={0.5}>
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            Email
          </SoftTypography>
        </SoftBox>
        <SoftInput type="email" placeholder="Email" />
      </SoftBox>
      <SoftBox mb={2}>
        <SoftBox mb={1} ml={0.5}>
          <SoftTypography component="label" variant="caption" fontWeight="bold">
            Password
          </SoftTypography>
        </SoftBox>
        <SoftInput type="password" placeholder="Password" />
      </SoftBox>

      <SoftBox mt={4} mb={1}>
        <SoftButton variant="gradient" color="info" fullWidth>
          sign in
        </SoftButton>
      </SoftBox>
    </SoftBox>
  );
}

export default Login;
