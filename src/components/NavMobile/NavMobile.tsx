import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Menu } from "lucide-react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import NavMobileLinks from "../NavMobileLinks/NavMobileLinks";
export default function NavMobile() {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <div className="hover:text-orange-500">
            <Menu />
          </div>
        </SheetTrigger>

        <SheetContent>
          <SheetTitle>
            {" "}
            {isAuthenticated ? (
              <span className="flex flex-col items-center font-bold gap-5 ">
                <img
                  src={user?.picture}
                  width={100}
                  height={100}
                  className="rounded-full "
                />
                {user?.email}
              </span>
            ) : (
              <p className="text-center">
                <span className="text-orange-500">W</span>elcome{" "}
                <span className="text-orange-500">T</span>o{" "}
                <span className="text-orange-500">F</span>ood{" "}
                <span className="text-orange-500">O</span>rder !
              </p>
            )}
          </SheetTitle>
          <Separator />
          <SheetDescription className="flex">
            {isAuthenticated ? (
              <NavMobileLinks />
            ) : (
              <Button
                className="flex-1 font-bold mt-3 bg-orange-500 "
                onClick={() => loginWithRedirect()}
              >
                Log In
              </Button>
            )}
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
}
