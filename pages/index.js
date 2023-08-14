import Nav from "../components/Nav";
import Link from "next/link";
import FadeIn from "react-fade-in";

export default function Home() {
  return (
    <Nav activeLink={"Home"}>
      <div className="text-left flex flex-col justify-center min-h-screen pb-12 -my-28 sm:-my-24">
        <FadeIn delay={200} transitionDuration={500}>
          <h1 className="font-body text-9xl pt-10 sm:pt-0 sm:text-9xl tracking-wide font-medium">
            Josh Mayer
          </h1>
          <div className="tracking-tight">
            <p className="sm:text-xl text-lg leading-6 mt-4 lg:w-1/2">
              19. San Francisco. Mostly a student. Occasionally a{" "}
              <span className="hover:blur-sm transition ease-in-out filter animate-pulse">
                <Link href="/worklog">
                  <a className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 ">
                    programmer
                  </a>
                </Link>
              </span>
              ,{" "}
              <span className="hover:blur-sm transition ease-in-out filter animate-pulse">
                <a
                  href="https://www.behance.net/jooshmayer"
                  target="_blank"
                  className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500 "
                >
                  designer
                </a>
              </span>
              , and{" "}
              <span className="hover:blur-sm transition ease-in-out filter animate-pulse">
                <a
                  href="https://www.behance.net/jooshmayer"
                  target="_blank"
                  className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-500 "
                >
                  creator
                </a>
              </span>
              .
            </p>
          </div>
        </FadeIn>
      </div>
    </Nav>
  );
}
