import React, { useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Userslist from "./Userslist";

import Addblog from "./Addblog";
import Blogslist from "./Blogslist";
import Editblog from "./Editblog";
import { useSelector } from "react-redux";
export default function Adminscreen() {
  const userstate = useSelector((state) => state.loginReducer);

  const currentUser = userstate.currentUser;
  useEffect(() => {
    if (currentUser) {
      if (!currentUser.isAdmin) {
        window.location.href = "/";
      }
    } else {
      window.location.href = "/";
    }
  }, []);

  return (
    <div>
      <div className="row justify-content-center mt-2">
        <div className="col-md-10">
          <h2>Admin Panel</h2>
          <ul className="admin p-2">
            <li>
              <Link to="/admin/userslist" style={{ color: "black" }}>
                UsersList
              </Link>
            </li>
            <li>
              <Link to="/admin/blogslist" style={{ color: "black" }}>
                Blogs List
              </Link>
            </li>
            <li>
              <Link to="/admin/addnewblog" style={{ color: "black" }}>
                Add New Blog
              </Link>
            </li>
          </ul>

          <Switch>
            <Route path="/admin/" component={Userslist} exact />
            <Route path="/admin/userslist" component={Userslist} />

            <Route path="/admin/addnewblog" component={Addblog} />
            <Route path="/admin/blogslist" component={Blogslist} />
            <Route path="/admin/editblog/:blogid" component={Editblog} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
