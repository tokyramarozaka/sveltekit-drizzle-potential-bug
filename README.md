# Drizzle and Svelte Kit : bug with env variables ?

This is a replica of a bug I came across with SvelteKit and my first time using Drizzle. Since the Drizzle configuration file need a very SECRET connection URL, I thought, hum, let's put it inside `.env` and make the configuration file `drizzle.config.ts` a server file.

## How do I see the bug ?

I put the .env file there, and you can just run `npm run build`, and then try to generate migrations by using `npm run generate`

## What works then ?  
I don't know but I ended up using `dotenv` for `drizzle.config.ts` to access the private environment variable. Also putting the hard-coded value of the `DUMMY_SECRET_VARIABLE` variable works, but that's not very secure, is it ?
