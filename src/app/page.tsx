import GeminiEffect from "@/components/GeminiEffect";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-prima">
      <Link href={"/login"}>
      <Button>Login</Button>
      </Link>
      <GeminiEffect/>
    </div>
  );
}
