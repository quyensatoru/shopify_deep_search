import React, { useState } from "react";
import { EditorContent as TiptapContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import CommandMenu from "./CommandMenu";
import SearchProductBlock from "./SearchProductBlock";

const EditorContent = () => {
  // Chỉ khởi tạo editor ở phía client
  const editor = typeof window !== "undefined"
    ? useEditor({
        extensions: [
          StarterKit,
          Placeholder.configure({ placeholder: "Start writing..." }),
        ],
        content: "",
        immediatelyRender: false,
      })
    : null;

  const [openCmdk, setOpenCmdk] = useState(false);

  if (!editor) {
    // Có thể trả về loading hoặc null khi SSR
    return null;
  }

  return (
    <div>
      <button onClick={() => setOpenCmdk(true)}>Open Command Menu (Cmd+K)</button>
      <TiptapContent editor={editor} />
      <CommandMenu open={openCmdk} onClose={() => setOpenCmdk(false)} editor={editor} />
      {/* Render block search sản phẩm demo bên dưới */}
      <div style={{ marginTop: 32 }}>
        <SearchProductBlock />
      </div>
    </div>
  );
};

export default EditorContent; 