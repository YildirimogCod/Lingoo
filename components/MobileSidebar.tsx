import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";
const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0 bg-slate-100 z-[100]">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
