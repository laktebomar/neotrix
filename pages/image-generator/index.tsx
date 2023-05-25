import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import styles from "./index.module.scss";
import prompts from "@/helpers/prompts";
import { useUser } from "@supabase/auth-helpers-react";
import Link from "next/link";
const BgGenerator = () => {
  const user = useUser();
  const [counter, setCounter] = useState<number>(0);
  const [prompt, setPrompt] = useState<string>(
    "futuristic tree house, hyper realistic, epic composition, cinematic, landscape vista photography by Carr Clifton & Galen Rowell, Landscape veduta photo by Dustin Lefevre & tdraw, detailed landscape painting by Ivan Shishkin, rendered in Enscape, Miyazaki, Nausicaa Ghibli, 4k detailed post processing, unreal engine"
  );
  const [selectedImg, setSelectedImg] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const generate = useCallback(async () => {
    setLoading(true);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });
    const data = await response.json();
    if (data.error) {
      setLoading(false);
      return;
    }

    setSelectedImg(data.images);
    setLoading(false);
  }, [prompt]);

  return (
    <Box sx={{ padding: { xs: "1% 1%", md: "1% 2%" } }}>
      <Box
        sx={{
          borderRadius: "10px",
          opacity: "0.9",
          border: "1px solid #292524",
          background: "#292524",
        }}
      >
        <img
          src={
            selectedImg
              ? selectedImg
              : `https://replicate.delivery/pbxt/4kw2JSufYNV0AK76QGZHEI3EuUhkxTZ43O9rff2LWy4czSNhA/out.png`
          }
          alt=""
          className={styles.img}
          style={{ width: "100%" }}
        />
        <Box
          sx={{
            display: "grid",
            placeItems: "center",
            background: "transparent",
            margin: "2%",
          }}
        >
          <p
            style={{
              backgroundColor: "transparent",
              fontSize: "26px",
              textAlign: "center",
            }}
          >
            Generate amazing Backgrounds
          </p>
          <input
            type="text"
            style={{
              all: "unset",
              margin: "3%",
              padding: "2%",
              borderRadius: "10px",
              border: "1px solid white",
              fontSize: "16px",
              fontFamily: "fantasy",
              fontWeight: "bold",
              color: "white",
              width: "60%",
            }}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          {user?.aud ? (
            <button
              disabled={
                user?.user_metadata?.limit === 5 || loading ? true : false
              }
              style={{
                all: "unset",
                textAlign: "center",
                padding: "1%",
                opacity: loading ? "0.2" : "1",
                cursor: "pointer",
                width: "30%",
                borderRadius: "10px",
                fontSize: "16px",
                fontFamily: "monospace",
                fontWeight: "900",
                color: "white",
                backgroundColor: "orange",
              }}
              onClick={() => generate()}
            >
              Generate
            </button>
          ) : (
            <Link
              href="/login"
              style={{
                all: "unset",
                textAlign: "center",
                padding: "1%",
                opacity: loading ? "0.2" : "1",
                cursor: "pointer",
                width: "30%",
                borderRadius: "10px",
                fontSize: "16px",
                fontFamily: "monospace",
                fontWeight: "900",
                color: "white",
                backgroundColor: "orange",
              }}
            >
              Login
            </Link>
          )}
        </Box>

        <div className={styles.container}>
          {prompts.map((prompt, idx) => (
            <button className={styles.btnPrompt} key={idx}>
              {prompt.label}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            placeItems: "center",
            background: "transparent",
          }}
        >
          <p
            style={{
              backgroundColor: "transparent",
            }}
          >
            credits :{" "}
          </p>{" "}
          <p
            style={{
              backgroundColor: "transparent",
              margin: "1%",
            }}
          >
            {counter} / {user?.user_metadata?.limit}
          </p>
        </div>
      </Box>
    </Box>
  );
};

export default BgGenerator;
