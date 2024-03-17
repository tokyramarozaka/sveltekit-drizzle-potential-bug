import { DUMMY_SECRET_URL } from "$env/static/private";
import type {Config} from "drizzle-kit";

export default {
  schema: "./db/schema.ts", // might not work on some OS like windows where you'd have to do src/lib/db/schema.ts
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: DUMMY_SECRET_URL, // this is the part that breaks the import. Try a num run generate !
  },
} satisfies Config;
