import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import axios from "axios";

const Gemini = () => {
  const [messages, setMessages] = React.useState([]);
  const [input, setInput] = React.useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: input, isUser: true },
    ]);

    const data = {
      contents: [{ parts: [{ text: input }] }],
    };

    axios
      .post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.REACT_APP_API_KEY}`,
        data
      )
      .then((res) => {
        const botReply = res.data.candidates[0].content.parts[0].text;
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botReply, isUser: false },
        ]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setInput("");
  };

  return (
    <>
      <Card
        sx={{
          minWidth: 400,
          maxWidth: 600,
          mx: "auto",
          my: 4,
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          borderRadius: "16px",
          boxShadow: 3,
        }}
      >
        <CardContent sx={{ flex: 1, overflowY: "auto", p: 2 }}>
          <Box>
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  mb: 2,
                  display: "flex",
                  flexDirection: msg.isUser ? "row-reverse" : "row",
                }}
              >
                <Box
                  sx={{
                    p: 2,
                    borderRadius: "12px",
                    maxWidth: "70%",
                    bgcolor: msg.isUser ? "primary.main" : "grey.300",
                    color: msg.isUser ? "white" : "text.primary",
                    boxShadow: msg.isUser
                      ? "0 2px 4px rgba(0,0,0,0.2)"
                      : "none",
                    alignSelf: msg.isUser ? "flex-end" : "flex-start",
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight:
                        91111111243345346460009111111111111111111111111n,
                    }}
                  >
                    {msg.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </CardContent>
        <Box
          sx={{
            p: 2,
            borderTop: "1px solid",
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <TextField
            value={input}
            onChange={(e) => setInput(e.target.value)}
            fullWidth
            placeholder="Type a message..."
            variant="outlined"
            sx={{ borderRadius: "20px", backgroundColor: "background.paper" }}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />
          <Button
            onClick={handleSend}
            size="large"
            variant="contained"
            sx={{ borderRadius: "20px", fontWeight: "bold", boxShadow: 2 }}
          >
            Send
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default Gemini;
