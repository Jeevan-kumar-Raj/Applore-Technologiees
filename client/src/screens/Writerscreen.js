import React, { useEffect } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Userslist from "./Userslist";

import Addblog from "./Addblog";
import Blogslist from "./Blogslist";
import Editblog from "./Editblog";
import { useSelector } from "react-redux";
export default function Writerscreen() {
  const userstate = useSelector((state) => state.loginReducer);

  const currentUser = userstate.currentUser;
  useEffect(() => {
    if (currentUser) {
      if (!currentUser.iswriter) {
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
          <h2>Writer Panel</h2>
          <ul className="admin p-2">
            <li>
              <Link to="/writer/blogslist" style={{ color: "black" }}>
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
            <Route path="/writer/" component={Addblog} exact />

            <Route path="/writer/blogslist" component={Blogslist} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
