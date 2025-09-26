"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import { CheckCircle2, AlertCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setFormStatus("idle");

    try {
      const response = await fetch(
        "https://faas-fra1-afec6ce7.doserverless.co/api/v1/web/fn-ba35d02f-0b7f-4e3e-b8f5-ef0e34bac51d/default/proga-website-form-submission-on-contact-us",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      setFormStatus("success");
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#2a2a2a",
        color: "white",
        p: 5,
        borderRadius: 3,
        height: "fit-content",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 4, color: "white" }}
      >
        Get in touch
      </Typography>

      <Box
        component="form"
        onSubmit={form.handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 1 }}
      >
        <Box minHeight={"115px"}>
          <Typography variant="body2" sx={{ mb: 1, color: "white" }}>
            Full name
          </Typography>
          <TextField
            {...form.register("name")}
            placeholder="Enter your full name"
            fullWidth
            variant="outlined"
            error={!!form.formState.errors.name}
            helperText={form.formState.errors.name?.message}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#404040",
                color: "white",
                "& fieldset": { borderColor: "#555" },
                "&:hover fieldset": { borderColor: "#777" },
                "&.Mui-focused fieldset": { borderColor: "#999" },
              },
              "& .MuiInputBase-input::placeholder": { color: "#aaa" },
              "& .MuiFormHelperText-root": {
                color: "#FF515A !important",
                marginTop: "8px",
                marginLeft: "0",
              },
            }}
          />
        </Box>

        <Box minHeight={"115px"}>
          <Typography variant="body2" sx={{ mb: 1, color: "white" }}>
            Email
          </Typography>
          <TextField
            {...form.register("email")}
            placeholder="Enter your email address"
            type="email"
            fullWidth
            variant="outlined"
            error={!!form.formState.errors.email}
            helperText={form.formState.errors.email?.message}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#404040",
                color: "white",
                "& fieldset": { borderColor: "#555" },
                "&:hover fieldset": { borderColor: "#777" },
                "&.Mui-focused fieldset": { borderColor: "#999" },
              },
              "& .MuiInputBase-input::placeholder": { color: "#aaa" },
              "& .MuiFormHelperText-root": {
                color: "#FF515A !important",
                marginTop: "8px",
                marginLeft: "0",
              },
            }}
          />
        </Box>

        <Box minHeight={"115px"}>
          <Typography variant="body2" sx={{ mb: 1, color: "white" }}>
            Subject
          </Typography>
          <TextField
            {...form.register("subject")}
            placeholder="Enter the subject"
            fullWidth
            variant="outlined"
            error={!!form.formState.errors.subject}
            helperText={form.formState.errors.subject?.message}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#404040",
                color: "white",
                "& fieldset": { borderColor: "#555" },
                "&:hover fieldset": { borderColor: "#777" },
                "&.Mui-focused fieldset": { borderColor: "#999" },
              },
              "& .MuiInputBase-input::placeholder": { color: "#aaa" },
              "& .MuiFormHelperText-root": {
                color: "#FF515A !important",
                marginTop: "8px",
                marginLeft: "0",
              },
            }}
          />
        </Box>

        <Box>
          <Typography variant="body2" sx={{ mb: 1, color: "white" }}>
            Message
          </Typography>
          <TextField
            {...form.register("message")}
            placeholder="Enter your message"
            multiline
            rows={6}
            fullWidth
            variant="outlined"
            error={!!form.formState.errors.message}
            helperText={form.formState.errors.message?.message}
            sx={{
              "& .MuiOutlinedInput-root": {
                backgroundColor: "#404040",
                color: "white",
                "& fieldset": { borderColor: "#555" },
                "&:hover fieldset": { borderColor: "#777" },
                "&.Mui-focused fieldset": { borderColor: "#999" },
              },
              "& .MuiInputBase-input::placeholder": { color: "#aaa" },
              "& .MuiFormHelperText-root": {
                color: "#FF515A !important",
                marginTop: "8px",
                marginLeft: "0",
              },
            }}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          disabled={isSubmitting || formStatus === "success"}
          sx={{
            mt: 4,
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
            py: 1.5,
            "&:hover": { backgroundColor: "#f0f0f0" },
            "&:disabled": { backgroundColor: "#ccc" },
          }}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </Button>

        {formStatus === "error" && (
          <Alert
            severity="error"
            icon={<AlertCircle />}
            sx={{
              mt: 2,
              backgroundColor: "rgba(244, 67, 54, 0.1)",
              color: "white",
            }}
          >
            There was an error submitting your message. Please try again later.
          </Alert>
        )}
        {formStatus === "success" && (
          <Alert
            severity="success"
            icon={<CheckCircle2 />}
            sx={{
              mt: 2,
              backgroundColor: "rgba(76, 175, 80, 0.1)",
              color: "white",
            }}
          >
            Thank you for your message! We'll get back to you as soon as
            possible.
          </Alert>
        )}
      </Box>
    </Box>
  );
}
