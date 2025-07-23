import * as React from "react";
import { Command } from "cmdk";

interface CommandMenuProps {
  open: boolean;
  onClose: () => void;
  editor: any;
}

const CommandMenu: React.FC<CommandMenuProps> = ({ open, onClose, editor }) => {
  if (!open) return null;
  return (
    <Command style={{ position: "absolute", top: 60, left: 0, zIndex: 1000, background: "white", width: 400 }}>
      <Command.Input placeholder="Type a command or search…" />
      <Command.List>
        <Command.Item
          onSelect={() => {
            // Chèn block search sản phẩm vào editor (demo: chèn text)
            editor && editor.commands.insertContent("<search-product-block></search-product-block>");
            onClose();
          }}
        >
          Insert Product Search Block
        </Command.Item>
      </Command.List>
    </Command>
  );
};

export default CommandMenu; 