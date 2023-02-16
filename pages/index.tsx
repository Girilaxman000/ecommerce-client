import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="hello-world">
        1. User Register 2. User Login (can change password) 3. User receives
        jwt token and needs to pass as bearer token for authorization
      </div>
    </>
  );
}
