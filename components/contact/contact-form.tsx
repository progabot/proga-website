"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Typography,
  TextField,
  Button,
  Alert,
  useTheme,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { CONTACT_UPLOAD } from "@/lib/shared";
import { formatBytes } from "@/utils/file";
import { contactFormSchema, ContactFormValues } from "@/lib/validation/contact";
import { fadeInUpScale } from "@/utils/motion-presets";
import ContactFormSuccess from "./contact-form-success";
import ContactFormLoading from "./contact-form-loading";
import { scrollToContainer } from "@/utils/scroll-to-container";

export default function ContactForm() {
  const theme = useTheme();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const MAX_FILES = CONTACT_UPLOAD.MAX_FILES;
  const HEADER_OFFSET = 110;

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      files: [],
    },
  });

  const files = form.watch("files") ?? [];
  const filesError = form.formState.errors.files?.message;

  const addFiles = (incoming: File[]) => {
    const existingKey = new Set(
      files.map((f) => `${f.name}:${f.size}:${f.lastModified}`)
    );
    const unique = incoming.filter(
      (f) => !existingKey.has(`${f.name}:${f.size}:${f.lastModified}`)
    );
    const next = [...files, ...unique].slice(0, MAX_FILES);

    form.setValue("files", next, { shouldValidate: true, shouldDirty: true });
    form.trigger("files");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const removeFileAt = (idx: number) => {
    const next = files.filter((_, i) => i !== idx);
    form.setValue("files", next, { shouldValidate: true, shouldDirty: true });
    form.trigger("files");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit = async (data: ContactFormValues) => {
    scrollToContainer(containerRef.current, HEADER_OFFSET);
    setIsSubmitting(true);
    setHasInteracted(true);
    setFormStatus("idle");

    try {
      const fd = new FormData();
      fd.append("name", data.name);
      fd.append("email", data.email);
      fd.append("subject", data.subject);
      fd.append("message", data.message);
      (data.files ?? []).forEach((f) => fd.append("files", f));

      const response = await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });

      if (!response.ok) {
        const txt = await response.text().catch(() => "");
        throw new Error(txt || `HTTP error! status: ${response.status}`);
      }

      setFormStatus("success");
      form.reset();
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewResponse = () => {
    setFormStatus("idle");
    setIsSubmitting(false);
    form.reset();
    setTimeout(
      () => scrollToContainer(containerRef.current, HEADER_OFFSET),
      100
    );
  };

  const view =
    isSubmitting && formStatus === "idle"
      ? "loading"
      : formStatus === "success"
      ? "success"
      : "form";

  const animationProps = hasInteracted
    ? fadeInUpScale
    : { transition: { duration: 0 } };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={view}
        {...animationProps}
        style={{ height: "100%" }}
        ref={containerRef}
      >
        <Box sx={{ height: "100%" }}>
          {view === "loading" && <ContactFormLoading />}

          {view === "success" && (
            <ContactFormSuccess onNewResponse={handleNewResponse} />
          )}

          {view === "form" && (
            <Box
              sx={{
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.secondary,
                p: 5,
                borderRadius: 3,
                height: "fit-content",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: 4,
                  color: theme.palette.text.secondary,
                }}
              >
                Get in touch
              </Typography>

              <Box
                component="form"
                onSubmit={form.handleSubmit(onSubmit)}
                sx={{ display: "flex", flexDirection: "column", gap: 1 }}
              >
                <Box mb={2}>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1, color: theme.palette.text.secondary }}
                  >
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
                        backgroundColor: theme.palette.grey[900],
                        color: theme.palette.text.secondary,
                        "& fieldset": {
                          borderColor: theme.palette.grey[700],
                          transition: "border-color 0.2s",
                        },
                        "&:hover fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: theme.palette.grey[400],
                      },
                      "& .MuiFormHelperText-root": {
                        color: "#FF515A !important",
                        marginTop: "8px",
                        marginLeft: "0",
                      },
                    }}
                  />
                </Box>

                <Box mb={2}>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1, color: theme.palette.text.secondary }}
                  >
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
                        backgroundColor: theme.palette.grey[900],
                        color: theme.palette.text.secondary,
                        "& fieldset": {
                          borderColor: theme.palette.grey[700],
                          transition: "border-color 0.2s",
                        },
                        "&:hover fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: theme.palette.grey[400],
                      },
                      "& .MuiFormHelperText-root": {
                        color: "#FF515A !important",
                        marginTop: "8px",
                        marginLeft: "0",
                      },
                    }}
                  />
                </Box>

                <Box mb={2}>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1, color: theme.palette.text.secondary }}
                  >
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
                        backgroundColor: theme.palette.grey[900],
                        color: theme.palette.text.secondary,
                        "& fieldset": {
                          borderColor: theme.palette.grey[700],
                          transition: "border-color 0.2s",
                        },
                        "&:hover fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: theme.palette.grey[400],
                      },
                      "& .MuiFormHelperText-root": {
                        color: "#FF515A !important",
                        marginTop: "8px",
                        marginLeft: "0",
                      },
                    }}
                  />
                </Box>

                <Box mb={2}>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1, color: theme.palette.text.secondary }}
                  >
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
                        backgroundColor: theme.palette.grey[900],
                        color: theme.palette.text.secondary,
                        "& fieldset": {
                          borderColor: theme.palette.grey[700],
                          transition: "border-color 0.2s",
                        },
                        "&:hover fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                      },
                      "& .MuiInputBase-input::placeholder": {
                        color: theme.palette.grey[400],
                      },
                      "& .MuiFormHelperText-root": {
                        color: "#FF515A !important",
                        marginTop: "8px",
                        marginLeft: "0",
                      },
                    }}
                  />
                </Box>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{ mb: 1, color: theme.palette.text.secondary }}
                  >
                    Attachments <span style={{ opacity: 0.7 }}>(optional)</span>
                  </Typography>

                  <Box
                    component="label"
                    onDragEnter={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragOver={(e) => {
                      e.preventDefault();
                      setIsDragging(true);
                    }}
                    onDragLeave={(e) => {
                      e.preventDefault();
                      setIsDragging(false);
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      setIsDragging(false);
                      const dropped = Array.from(e.dataTransfer.files || []);
                      if (dropped.length) addFiles(dropped);
                    }}
                    sx={{
                      display: "block",
                      cursor:
                        isSubmitting || files.length >= MAX_FILES
                          ? "auto"
                          : "pointer",
                      border: "1px dashed",
                      borderColor: isDragging
                        ? theme.palette.primary.main
                        : theme.palette.grey[700],
                      backgroundColor: theme.palette.grey[900],
                      borderRadius: 2,
                      p: 2,
                      opacity:
                        isSubmitting || files.length >= MAX_FILES ? 0.6 : 1,
                      userSelect: "none",
                      transition: "border-color 0.2s",
                      "&:hover": {
                        borderColor:
                          isSubmitting || files.length >= MAX_FILES
                            ? theme.palette.grey[700]
                            : theme.palette.primary.main,
                      },
                    }}
                  >
                    <input
                      ref={fileInputRef}
                      hidden
                      type="file"
                      multiple
                      disabled={isSubmitting || files.length >= MAX_FILES}
                      onChange={(e) =>
                        addFiles(Array.from(e.target.files || []))
                      }
                    />

                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      Click to upload or drag & drop files here
                    </Typography>

                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        mt: 0.5,
                        color: theme.palette.grey[400],
                      }}
                    >
                      Max {formatBytes(CONTACT_UPLOAD.MAX_TOTAL_BYTES)} (up to{" "}
                      {MAX_FILES} files)
                    </Typography>

                    {files.length > 0 && (
                      <Box
                        sx={{
                          mt: 2,
                          display: "flex",
                          flexDirection: "column",
                          gap: 1,
                        }}
                      >
                        {files.map((f, idx) => (
                          <Box
                            key={`${f.name}-${f.size}-${f.lastModified}`}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-between",
                              gap: 1,
                              p: 1,
                              borderRadius: 1,
                              backgroundColor: theme.palette.background.default,
                            }}
                          >
                            <Typography
                              variant="body2"
                              sx={{
                                color: theme.palette.text.secondary,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                              }}
                            >
                              {f.name} • {formatBytes(f.size)}
                            </Typography>

                            <Button
                              size="small"
                              variant="text"
                              onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                removeFileAt(idx);
                              }}
                              disabled={isSubmitting}
                              sx={{
                                color: theme.palette.error.main,
                                textTransform: "none",
                              }}
                            >
                              Remove
                            </Button>
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Box>

                  {filesError && (
                    <Typography
                      variant="caption"
                      sx={{
                        display: "block",
                        mt: 1,
                        color: theme.palette.error.main,
                      }}
                    >
                      {filesError}
                    </Typography>
                  )}
                </Box>

                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  sx={{
                    mt: 4,
                    backgroundColor: theme.palette.background.paper,
                    color: "black",
                    fontWeight: "bold",
                    py: 1.5,
                    "&:hover": { backgroundColor: theme.palette.grey[50] },
                    "&:disabled": {
                      backgroundColor: theme.palette.background.paper,
                    },
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
                      color: theme.palette.text.secondary,
                    }}
                  >
                    There was an error submitting your message. Please try again
                    later.
                  </Alert>
                )}
              </Box>
            </Box>
          )}
        </Box>
      </motion.div>
    </AnimatePresence>
  );
}
