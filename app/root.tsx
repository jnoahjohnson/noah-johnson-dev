import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./tailwind.css";
import { classNames } from "./utils/frontend";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
  },
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "noahJohnson",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  let activeLink = "home";
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <header className="z-50 px-6 py-4 max-w-4xl w-full mx-auto fixed top-0 left-0 lg:top-6 lg:rounded rounded-none right-0 flex items-center justify-between text-white overflow-hidden backdrop-blur">
          <img
            src="/images/logo.png"
            className="h-8 z-10"
            alt="Noah Johnson Dev"
          />
          <nav className="z-10">
            <ul className="flex space-x-4 text-base font-light">
              <li>
                <Link
                  to="/"
                  className={classNames(
                    "relative before:content-[''] before:absolute before:block before:h-[1.5px] before:rounded before:bottom-0 before:left-0 before:bg-primary before:origin-top-left before:w-full",
                    activeLink === "home"
                      ? "before:scale-x-100"
                      : "before:scale-x-0 before:transition before:ease-in-out before:duration-300 before:hover:scale-x-100"
                  )}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={classNames(
                    "relative before:content-[''] before:absolute before:block before:h-[1.5px] before:rounded before:bottom-0 before:left-0 before:bg-primary before:origin-top-left before:w-full",
                    activeLink === "projects"
                      ? "before:scale-x-100"
                      : "before:scale-x-0 before:transition before:ease-in-out before:duration-300 before:hover:scale-x-100"
                  )}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className={classNames(
                    "relative before:content-[''] before:absolute before:block before:h-[1.5px] before:rounded before:bottom-0 before:left-0 before:bg-primary before:origin-top-left before:w-full",
                    activeLink === "blog"
                      ? "before:scale-x-100"
                      : "before:scale-x-0 before:transition before:ease-in-out before:duration-300 before:hover:scale-x-100"
                  )}
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <div className="w-full h-full bg-light absolute inset-0 z-0 opacity-70 lg:rounded rounded-none" />
        </header>
        <Outlet />
        <footer className="py-12 bg-black">
          <div className="max-w-5xl px-4 mx-auto">
            <img
              src="/images/logo.png"
              alt="Noah Johnson Dev"
              className="h-8 mx-auto"
            />
          </div>
        </footer>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
