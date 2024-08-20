import { Link } from "@nextui-org/link";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { title } from "@/components/primitives";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 bg-black text-white">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className={title({ color: "violet", size: "lg" })}>
          Daniel Vajda
        </h1>
        <div className="flex gap-4">
          <Link isExternal href="https://github.com/your-github-username" aria-label="GitHub">
            <GithubIcon size={24}/>
          </Link>
          <Link isExternal href="https://www.linkedin.com/in/your-linkedin-username" aria-label="LinkedIn">
            <LinkedinIcon size={24} />
          </Link>
        </div>
      </div>
    </nav>
  );
}