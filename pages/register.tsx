import Link from "next/link";

const Register = () => {
  return (
    <>
      <h1>Register</h1>
      <input type="text" placeholder="Enter Name" />
      <input type="text" placeholder="Password" />
      <button>Submit</button>
      <div>
        <Link href="/change-password">Change Password</Link>
      </div>
    </>
  );
};

export default Register;
