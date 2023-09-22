import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const session: any = useSession();

  return (
    <div className="bg-green-500 bg-opacity-10">
      <div className="flex justify-between p-3">
        <Image src={"/assets/logo.png"} alt="google" width={25} height={25} />

        <div className="flex gap-4">
          {session && session?.data?.accessToken ? (
            <>
              <button className="text-blue-600" onClick={() => signOut()}>
                SignOut
              </button>
            </>
          ) : (
            <>
              <Link className="text-blue-600" href="/login">
                Login
              </Link>
              <Link className="text-blue-600" href="/login">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
