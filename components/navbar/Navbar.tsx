import { AppBar, Box, Toolbar } from "@mui/material";
import { useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const user = useUser();
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "transparent",
        boxShadow: "none",
        color: "white",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          Neotrix AI
        </Link>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2%",
            width: "50%",
          }}
        >
          <Link href="image-generator" style={{ textDecoration: "none" }}>
            Image Generator
          </Link>
          <Link href="" style={{ textDecoration: "none" }}>
            Image Remixer
          </Link>
          <Link href="" style={{ textDecoration: "none" }}>
            icon Generator
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {user?.email}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
