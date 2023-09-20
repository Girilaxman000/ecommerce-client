import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-green-500 bg-opacity-10">
      <div className="flex justify-between p-3">
        <Image src={"/assets/logo.png"} alt="google" width={25} height={25} />
        <div className="flex gap-4">
          <Link className="text-blue-600" href="/login">
            Login
          </Link>
          <Link className="text-blue-600" href="/login">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
