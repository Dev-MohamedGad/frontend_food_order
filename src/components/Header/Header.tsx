import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import {Button} from '../ui/button'
import { Separator } from "@radix-ui/react-separator";
import { useAuth0 } from "@auth0/auth0-react";

export default function Header() {
  const {loginWithRedirect} =useAuth0()
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500"
        >
          Food Ordering
        </Link>
        //////////////////////////////////////////////////////////////////////////////////////////////////////////
        <Button  variant='ghost' className="hover:text-orange-500 font-bold max-md:hidden" onClick={async ()=>await loginWithRedirect()}>
          Login
        </Button>
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
                <Button className="flex-1 font-extrabold bg-orange-500 ">
                  Log In
                </Button> <Button className="flex-1 font-bold bg-orange-500 ">
                  Log In
                </Button>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
