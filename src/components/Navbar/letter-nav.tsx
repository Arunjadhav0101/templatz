"use client";

import {
  Edit2,
  ImportIcon as Export,
  Layout,
  Printer,
  Share2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import LetterEditForm from "../Letter/EditLetter";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
export default function LetterEditorNav({ toPDF, setFormat }: { toPDF: () => void, setFormat: (format: "format1" | "format2") => void }) {
  const letterState = useSelector((state: RootState) => state.letter);
  return (
    <div className="flex fixed bottom-0 left-0 right-0 z-5 border-t print:hidden py-2">
      {/* Mobile Vertical Nav */}

      <nav className=" w-full print:hidden">
        <div className="flex md:justify-center items-center gap-4 overflow-x-auto scrollbar- scrollbar-thumb-gray-400 scrollbar-track-gray-200">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2"
            onClick={() => toPDF()}
          >
            <Export className="h-4 w-4" />
            Export
          </Button>
          <Button variant="ghost" size="sm" className="gap-2">
            <Share2 className="h-4 w-4" />
            Share
          </Button>
          <Dialog>
            <DialogTrigger className="inline-flex text-xs items-center gap-2">
              <Edit2 className="h-4 w-4" /> Edit
            </DialogTrigger>
            <DialogContent className="overflow-y-auto h-full md:max-h-[500px]">
              <DialogHeader>
          <DialogTitle>Edit?</DialogTitle>

          <LetterEditForm letterData={letterState.letter} />
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Button
            variant="ghost"
            size="sm"
            className="gap-2"
            onClick={() => window.print()}
          >
            <Printer className="h-4 w-4" />
            Print
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="gap-2">
          <Layout className="h-4 w-4" />
          Layout
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={()=>setFormat("format1")}>Format 1</DropdownMenuItem>
              <DropdownMenuItem onClick={()=>setFormat("format2")}>Format 2</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
}
