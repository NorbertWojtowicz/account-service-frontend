import "bootstrap/dist/css/bootstrap.min.css";
const Menu = () => {
    return (
        <div>
            <h1 style={{marginTop: "1em"}}>Account service functionality</h1>
            <ul className="list-group" style={{width: "50%", margin: "2em auto"}}>
                <a href={"/signup"} className="list-group-item list-group-item-action">Sign up</a>
                <a href={"/"} className="list-group-item list-group-item-action">Sign in</a>
                <a href={"/"} className="list-group-item list-group-item-action">Change password</a>
                <a href={"/"} className="list-group-item list-group-item-action">Upload payrolls</a>
                <a href={"/"} className="list-group-item list-group-item-action">Display employee's payrolls</a>
                <a href={"/"} className="list-group-item list-group-item-action">Update payment information</a>
                <a href={"/"} className="list-group-item list-group-item-action">Change user roles</a>
                <a href={"/"} className="list-group-item list-group-item-action">Delete users</a>
                <a href={"/"} className="list-group-item list-group-item-action">Display information about all users</a>
                <a href={"/"} className="list-group-item list-group-item-action">Lock / unlock users</a>
                <a href={"/"} className="list-group-item list-group-item-action">Display security events</a>
            </ul>
        </div>
    );
}

export default Menu;