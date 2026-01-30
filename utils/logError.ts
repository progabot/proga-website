export function logError(message: string, err?: unknown) {
  const ts = new Date().toISOString();
  console.error(`[${ts}] ${message}`, err);
}
