import { h, Component } from 'preact';
import s from './Header.scss';
import Icon from './icon.svg';

class Header extends Component {

  componentWillMount() {
    this.removeCss = s._insertCss();
  }

  componentWillUnmount() {
    this.removeCss();
  }

  render() {
    return (
      <div class={s.root} >
        <Icon />
      </div>
    );
  }
}


export default Header
