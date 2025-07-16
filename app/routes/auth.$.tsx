import type { LoaderFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const auth = await authenticate.admin(request);
  console.log("auth: ", auth)
  return null;
};
