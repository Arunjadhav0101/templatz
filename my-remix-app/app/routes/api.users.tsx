import {  LoaderFunction } from '@remix-run/node';
const apiKey = process.env.REMIX_GMAIL_API_KEY;
// This loader is the equivalent of an API endpoint
export const loader: LoaderFunction = async () => {
  return Response.json({ message: 'Hello, world!' });
};

