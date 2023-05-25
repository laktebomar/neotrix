import { Box } from "@mui/material";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const route = useRouter();
  const supabase = useSupabaseClient();
  const signInWithMail = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      route.push("/image-generator");
      localStorage.setItem("supabase.auth.token", data?.user?.id as string);
    }
  };

  return (
    <Box
      sx={{
        padding: "10% 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2%",
      }}
    >
      <div
        style={{
          margin: "5% 0",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            fontSize: "36px",
          }}
        >
          Login
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "4%",
          width: "60%",
        }}
      >
        <input
          style={{
            all: "unset",
            width: "100%",
            padding: "1.5% 3%",
            borderRadius: "10px",
            border: "1px solid white",
            fontSize: "20px",
            fontFamily: "monospace",
            color: "white",
            marginBottom: "2%",
          }}
          type="text"
          placeholder="mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          style={{
            all: "unset",
            width: "100%",
            padding: "1.5% 3%",
            borderRadius: "10px",
            border: "1px solid white",
            fontSize: "20px",
            fontFamily: "monospace",
            color: "white",
            marginBottom: "5%",
          }}
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          style={{
            all: "unset",
            padding: "2% 6%",
            borderRadius: "10px",
            backgroundColor: "#FFFFFF",
            cursor: "pointer",
            marginBottom: "3 %",
          }}
          onClick={signInWithMail}
        >
          login
        </button>
        {error && (
          <p
            style={{ fontFamily: "monospace", fontSize: "18px", color: "red" }}
          >
            {error}
          </p>
        )}
      </div>
    </Box>
  );
};

export default Login;
