"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export default function Modal({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  function backHistory() {
    router.back();
  }

  return (
    <Dialog defaultOpen={true} open={true} onOpenChange={backHistory}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="sr-only">Modal</DialogTitle>
          <DialogDescription className="sr-only">modal</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
