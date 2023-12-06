import { Outlet, Link } from "react-router-dom";

export default function Layout() {
    return(
        <div className="headbook-router">
            <header className="headbook-header">
                <Link className="button" to={"/"}>Headbook</Link>                
            </header>            
            <Outlet />
        </div>
    )
}