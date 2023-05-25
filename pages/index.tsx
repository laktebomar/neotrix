import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { Box, Grid } from "@mui/material";
import bg from "../public/bg.jpeg";
import { Idata, data } from "@/constants/services";
import { useUser } from "@supabase/auth-helpers-react";
import { HfInference } from "@huggingface/inference";

export default function Home() {
  const user = useUser();
  if (user) {
    console.log(user);
  }
  return (
    <Box>
      <Box
        sx={{
          display: "grid",
          placeItems: "center",
        }}
      >
        <Box
          sx={{
            margin: "5% 0",
            border: "1px solid white",
            borderRadius: "10px",
            width: { xs: "90%", md: "60%" },
            padding: "2%",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "48px",
              marginBottom: "2%",
            }}
          >
            Neotrix ai
          </h1>
          <p
            style={{
              textAlign: "center",
              fontWeight: "normal",
              fontSize: "16px",
            }}
          >
            Is your one web app for everything you need to content creation and
            Ai art generation.
          </p>
        </Box>
        {user?.aud ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2%",
              width: "100%",
            }}
          >
            <Link
              href="/image-generator"
              style={{
                background: "white",
                borderRadius: "10px",
                padding: "1.5% 3%",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Try Image generator
            </Link>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2%",
              width: "100%",
            }}
          >
            <Link
              href="/login"
              style={{
                background: "white",
                borderRadius: "10px",
                padding: "1.5% 3%",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Sign in
            </Link>
            <Link
              href=""
              style={{
                background: "transparent",
                border: "1px solid white",
                borderRadius: "10px",
                padding: "1.5% 3%",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              Sign up
            </Link>
          </div>
        )}
      </Box>
      <Grid container spacing={3} mt={8}>
        {data.map((service: Idata) => (
          <Grid item xs={12} md={4} key={service.id}>
            <img
              style={{
                width: "100%",
                height: "50%",
                objectFit: "fill",
                borderRadius: "10px",
              }}
              src={service.image}
              alt=""
            />
            <div>
              <h1
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: "32px",
                  margin: "2% 0",
                  marginBottom: "2%",
                }}
              >
                {service.name}
              </h1>

              <p
                style={{
                  fontFamily: "monospace",
                  fontWeight: "Bold",
                  fontSize: "20px",
                  color: "white",
                }}
              >
                {service.description}
              </p>
            </div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
