import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  
  const onClickLogout = async () => {
    const url = "http://localhost:3000/logout"
    const options = {
      headers:{
        "content-type": "application/json"
      },
      method: "DELETE",
    }
    await fetch(url, options);

    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <p className="heading">FINANCEPEER</p>
        <ul className="nav-menu">
          <Link to="/" className="nav-link">
            <li>Upload</li>
          </Link>
          <Link to="/posts" className="nav-link">
            <li>Posts</li>
          </Link>
        </ul>
        <div className="button-container">
        <button
          type="button"
          className="logout-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
        </div>
      </div>
    </nav>
  )
}
export default withRouter(Header)