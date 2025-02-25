"use client"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

function Navbar() {
  return (
    <nav className="w-full fixed top-0 no-print">
      <Menubar className="container w-full mx-auto p-4 print:hidden">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent className="print:hidden">
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem onClick={()=>window.print()}>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

    </nav>
  );
}

export default Navbar;
