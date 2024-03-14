import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "../UsernameMenu/UsernameMenu";
import NavMobile from "../NavMobile/NavMobile";

export default function Header() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500"
        >
          Food Ordering
        </Link>
        <span className="flex space-x-2 items-center">
          {" "}
          {isAuthenticated ? (
            <div className=" max-md:hidden">
              {" "}
              <UsernameMenu />
            </div>
          ) : (
            <Button
              variant="ghost"
              className="hover:text-orange-500 font-bold max-md:hidden"
              onClick={async () => await loginWithRedirect()}
            >
              Login
            </Button>
          )}
        </span>

        <NavMobile/>
      </div>
    </div>
  );
}
