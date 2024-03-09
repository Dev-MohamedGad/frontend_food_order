import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
//import {Button} from '../ui/button'
import { Separator } from "@radix-ui/react-separator";

export default function Header() {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500"
        >
          Food Ordering
        </Link>
        <Link to="/" className="hover:text-orange-500 max-md:hidden">
          Login
        </Link>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
            <div className="hover:text-orange-500"><Menu  /></div>  
            </SheetTrigger>
           
            <SheetContent>
            <SheetTitle>
              {" "}
              <p className="text-center">Welcome to Food Order !</p>
            </SheetTitle>
              <Separator />
              <SheetDescription className="flex">
                <button className="flex-1 font-bold bg-orange-500 ">
                  Log In
                </button> <button className="flex-1 font-bold bg-orange-500 ">
                  Log In
                </button>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
