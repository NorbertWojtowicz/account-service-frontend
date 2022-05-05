import "bootstrap/dist/css/bootstrap.min.css";
const Menu = () => {
  function signout(e) {
    e.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.reload();
    e.refresh();
  }

  return (
    <div>
      <h1 style={{ marginBottom: "1em" }}>Account service functionality</h1>
      <ul className="list-group" style={{}}>
        <a href={"/signup"} className="list-group-item list-group-item-action">
          Sign up
        </a>
        <a href={"/signin"} className="list-group-item list-group-item-action">
          Sign in
        </a>
        <a
          href={"/"}
          onClick={(e) => signout(e)}
          className="list-group-item list-group-item-action"
        >
          Sign out
        </a>
        <a href={"/change-password"} className="list-group-item list-group-item-action">
          Change password
        </a>
        <a
          href={"/upload-payrolls"}
          className="list-group-item list-group-item-action"
        >
          Upload payments
        </a>
        <a href={"/employee-payrolls"} className="list-group-item list-group-item-action">
          Display Your payments
        </a>
        <a href={"/payrolls"} className="list-group-item list-group-item-action">
          Display payments of all users
        </a>
        <a href={"/payroll/update"} className="list-group-item list-group-item-action">
          Update payment information
        </a>
        <a href={"/change-role"} className="list-group-item list-group-item-action">
          Change user roles
        </a>
        <a href={"/users/delete"} className="list-group-item list-group-item-action">
          Delete users
        </a>
        <a href={"/users"} className="list-group-item list-group-item-action">
          Display information about all users
        </a>
        <a href={"/users/lock"} className="list-group-item list-group-item-action">
          Lock / unlock users
        </a>
        <a href={"/security-events"} className="list-group-item list-group-item-action">
          Display security events
        </a>
      </ul>
    </div>
  );
};

export default Menu;
