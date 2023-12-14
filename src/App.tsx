import { Breadcrumbs } from "./components/Breadcrumbs";
import { Component } from "./components/Component";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="flex items-start flex-1 gap-4 px-8 py-3">
        <Component>
          <Breadcrumbs separator={"/"} classes={{
            "ol": "px-8",
            "separator": "mx-3"
          }}>

            <li className="inline-flex items-center">
              <a
                className="flex items-center text-sm text-muted-foreground hover:underline hover:text-accent-foreground focus:outline-none focus:text-accent-foreground"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="inline-flex items-center">
              <a
                className="flex items-center text-sm text-muted-foreground hover:underline hover:text-accent-foreground focus:outline-none focus:text-accent-foreground"
                href="#"
              >
                App Center
              </a>
            </li>
            <li
              className="inline-flex items-center text-sm font-semibold text-primary truncate"
              aria-current="page"
            >
              Application
            </li>
          </Breadcrumbs>
        </Component>
        <Component>
          <Breadcrumbs>
            <li className="inline-flex items-center">
              <a
                className="flex items-center text-sm text-muted-foreground hover:text-accent-foreground focus:outline-none focus:text-accent-foreground"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="inline-flex items-center">
              <a
                className="flex items-center text-sm text-muted-foreground hover:text-accent-foreground focus:outline-none focus:text-accent-foreground"
                href="#"
              >
                App Center
              </a>
            </li>
            <li
              className="inline-flex items-center text-sm font-semibold text-primary truncate"
              aria-current="page"
            >
              Application
            </li>
          </Breadcrumbs>
        </Component>
      </main>
    </>
  );
}

export default App;
