import * as z from "zod";
import { CONTACT_UPLOAD } from "@/lib/shared";
import { formatBytes } from "@/utils/file";

export const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
  files: z
    .array(
      z
        .instanceof(File)
        .refine(
          (f) => !f.type || CONTACT_UPLOAD.ALLOWED_MIME.includes(f.type),
          { message: "Unsupported file type." }
        )
    )
    .max(CONTACT_UPLOAD.MAX_FILES, {
      message: `Max ${CONTACT_UPLOAD.MAX_FILES} files allowed.`,
    })
    .refine(
      (files) =>
        !files ||
        files.reduce((sum, f) => sum + f.size, 0) <=
          CONTACT_UPLOAD.MAX_TOTAL_BYTES,
      {
        message: `Files are too large (max ${formatBytes(
          CONTACT_UPLOAD.MAX_TOTAL_BYTES
        )}), please send them to contact@proga.tech instead.`,
      }
    )
    .optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
