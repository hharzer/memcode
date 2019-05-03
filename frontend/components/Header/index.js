import { NavLink } from 'react-router-dom';
import { Search } from './components/Search';
import { SignInLinks } from './components/SignInLinks';
import CurrentUser from './components/CurrentUser';
import Logo from './components/Logo';

import css from './index.css';

@connect((state) => ({
  currentUser: state.global.Authentication.currentUser
}))
class Header extends React.Component {
  static propTypes = {
    currentUser: PropTypes.object,
    dontLinkToLearnOrReview: PropTypes.string
  }

  static defaultProps = {
    currentUser: null
  }

  renderNavigation = () =>
    <nav>
      <NavLink
        exact
        to="/courses"
        className="link courses"
      >courses</NavLink>
      <NavLink
        exact
        to="/courses/new"
        className="link create"
      >create</NavLink>
    </nav>

  renderUser = () => (
    this.props.currentUser ?
      <CurrentUser currentUser={this.props.currentUser} dontLinkToLearnOrReview={this.props.dontLinkToLearnOrReview}/> :
      <SignInLinks/>
  )

  render = () =>
    <header className={css.header}>
      <div className="container -desktop">
        <Logo/>
        <Search currentUser={this.props.currentUser}/>

        <div className="nav-and-current-user">
          {this.renderNavigation()}

          <NavLink
            to="/courses/learning"
            className="button -purple my-courses-link"
          >MY COURSES</NavLink>

          {this.renderUser()}
        </div>
      </div>

      <div className="container -mobile">
        <div className="logo-and-user">
          <Logo/>
          {this.renderUser()}
        </div>

        {this.renderNavigation()}
        <Search currentUser={this.props.currentUser}/>
      </div>
    </header>
}

export { Header };
export default Header;
