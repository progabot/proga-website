export const CONTACT_UPLOAD = {
  MAX_FILES: 3,
  MAX_TOTAL_BYTES: 4 * 1024 * 1024, // 4MB
  ALLOWED_MIME: [
    "application/pdf",
    "image/png",
    "image/jpeg",
    "image/webp",
    "text/plain",
    "text/csv",
  ] as string[],
} as const;

export type AllowedMime = (typeof CONTACT_UPLOAD.ALLOWED_MIME)[number];
