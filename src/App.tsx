import "./App.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Slider from "@mui/material/Slider";
import Switch, { SwitchProps } from "@mui/material/Switch";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";

import styles from "./styles/index";

function App() {
  const [value, setValue] = useState<number>(30);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <Typography
        sx={{
          lineHeight: "2rem",
          fontSize: "1.6rem",
          fontWeight: 600,
          padding: "10rem 0 0.7rem 0",
        }}
      >
        Simple, traffic based pricing
      </Typography>
      <Typography
        sx={{
          padding: "0 0 4.5rem 0",
          maxWidth: {
            xs: "50%",
            lg: "80%",
          },
        }}
      >
        Sign up for 30-day trail. No credit card required.
      </Typography>
      <Card sx={{ minWidth: "35vw" }}>
        <Box sx={{ mx: "3rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              padding: "2rem 0 0.5rem 0",
            }}
          >
            <Typography>100K PAGEVIEWS</Typography>
            <Typography
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  lineHeight: "1rem",
                  fontSize: "2.7rem",
                  fontWeight: 600,
                }}
              >
                $16.00
              </Typography>
              <Typography sx={{ padding: "0 0 0 0.5rem" }}>/month</Typography>
            </Typography>
          </Box>
          <Box>
            <Slider
              aria-label="Volume"
              value={value}
              onChange={handleChange}
              sx={{ color: "#A9EBDF", padding: "3rem 0 0 0" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: "1rem 0 2.5rem 0",
            }}
          >
            <Typography>Monthly Billing</Typography>
            <Switch />
            <Typography>Yearly Billing</Typography>
            <Typography
              sx={{
                color: "red",
                borderRadius: "2rem",
                mx: "1rem",
                background: "#FFE5E4",
                padding: "0.1rem 0.5rem 0.1rem 0.5rem ",
              }}
            >
              25% discount
            </Typography>
          </Box>
        </Box>
      </Card>
      <Card sx={{ minWidth: "35vw" }}>
        <Box
          sx={{
            mx: "3rem",
            padding: "1.5rem 0 0 0",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingBottom: "0.5rem",
              }}
            >
              <CheckIcon sx={{ color: "#A9EBDF" }} />
              <Typography sx={{ mx: "1rem" }}> Unlimited websites</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingBottom: "0.5rem",
              }}
            >
              <CheckIcon sx={{ color: "#A9EBDF" }} />
              <Typography sx={{ mx: "1rem" }}> 100% data ownership</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                paddingBottom: "1.5rem",
              }}
            >
              <CheckIcon sx={{ color: "#A9EBDF" }} />
              <Typography sx={{ mx: "1rem" }}> Email reports</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              bgcolor: "#000435",
              width: "10rem",
              height: "4.2vh",
              borderRadius: "3rem",
              textAlign: "center",
            }}
          >
            <Button variant="text">Start my trail</Button>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default App;
