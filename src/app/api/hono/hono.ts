// app/api/hono/hono.ts
import { Hono } from 'hono';

const app = new Hono();

// A simple route to return plain text
app.get('/', (ctx) => {
  return ctx.text('Hello from Hono.js!');
});

// A route to return JSON data
app.get('/data', (ctx) => {
  return ctx.json({ message: 'This is a JSON response from Hono.js' });
});

// Exporting fetch to use in Next.js
export const fetch = app.fetch;
