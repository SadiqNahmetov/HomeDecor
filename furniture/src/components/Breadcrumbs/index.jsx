import useBreadcrumbs from "use-react-router-breadcrumbs";
import { NavLink } from "react-router-dom";
import "./breadcrumb.scss";


const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs();

  return (
    <div className="container">
      {breadcrumbs.map(({ match, breadcrumb }) => (
        <NavLink className="pagelink" key={match.pathname} to={match.pathname}>
          {breadcrumb}
        </NavLink>
      ))}
    </div>
  );
};

export default Breadcrumbs;