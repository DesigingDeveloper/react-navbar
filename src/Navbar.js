import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar ()
{

  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        HealthyGram
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
        <CustomLink to="/recordList">Records list</CustomLink>
        <CustomLink to="/doctor">Doctor</CustomLink>
        <CustomLink to="/patient">Patient</CustomLink>
        <CustomLink to="/register">Register</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink ( { to, children, ...props } )
{
  const resolvedPath = useResolvedPath( to )
  const isActive = useMatch( { path: resolvedPath.pathname, end: true } )

  return (
    <li className={ isActive ? "active" : "" }>
      <Link to={ to } { ...props }>
        { children }
      </Link>
    </li>
  )
}

