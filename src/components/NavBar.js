const NavBar = () => {
  const username = localStorage.getItem("username");
  const password = localStorage.getItem("password");

  return (
    <div>
      <a
        href={"/"}
        style={{ position: "absolute", margin: "-0.4em 0 0 6em" }}
        className="btn btn-outline-primary"
      >
        Home
      </a>
      <h5 style={{ margin: "1em 10vw 1em 0", textAlign: "right" }}>
        {username && password ? "Logged in as " + username : "Not logged in"}
      </h5>
      <hr />
    </div>
  );
};

export default NavBar;
