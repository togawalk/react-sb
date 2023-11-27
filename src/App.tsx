import { Breadcrumbs } from "./components/Breadcrumbs";
import { Component } from "./components/Component";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main className="flex items-start flex-1 gap-4 px-8 py-3">
        <Component>
          <Breadcrumbs />
        </Component>
        <Component>
          <Breadcrumbs>
            <p>Home</p>
            <p>App Center</p>
            <p>Application</p>
          </Breadcrumbs>
        </Component>
      </main>
    </>
  );
}

export default App;
