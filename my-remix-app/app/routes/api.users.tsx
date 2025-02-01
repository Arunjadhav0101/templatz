import {  LoaderFunction } from '@remix-run/node';
// This loader is the equivalent of an API endpoint
export const loader: LoaderFunction = async () => {
  return Response.json({ message: 'Hello, world!' });
};

