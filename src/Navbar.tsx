function Navbar() {
  return (
    <header itemID={"app-main-header"}>
      <nav itemID={"app-navbar"}>
        <ul itemID={"app-nav-list"} className={"navbar"}>
          <li>
            <a href={"App.tsx"} itemID={"app-main-home"} className={"nav-link"}>
              Home
            </a>
          </li>
          <li>
            <a
              href={"Download.tsx"}
              itemID={"app-main-download"}
              className={"nav-link"}
            >
              Downloads
            </a>
          </li>
          <li>
            <a
              href={"Docs-home.tsx"}
              itemID={"app-main-docs"}
              className={"nav-link"}
            >
              Docs
            </a>
          </li>
          <li>
            <a
              href={"Login.tsx"}
              itemID={"app-main-login"}
              className={"nav-link"}
            >
              Login
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
