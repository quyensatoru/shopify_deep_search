import { useState } from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Card, Page } from "@shopify/polaris";
import EditorContent from "../components/EditorContent";

export const loader = async () => {
  // Có thể load dữ liệu khởi tạo nếu cần
  return json({});
};

export default function EditorRoute() {
  const data = useLoaderData<typeof loader>();
  return (
    <Page title="Shopify Page Builder">
      <Card>
        <EditorContent />
      </Card>
    </Page>
  );
} 