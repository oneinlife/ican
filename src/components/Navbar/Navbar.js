import { h, Component } from 'preact';
import { Link } from 'preact-router';
import connect from '@vkontakte/vk-connect';
import Event from './event.svg';
import Man from './man.svg';
import News from './news.svg';
import Person from './person.svg';
import QRcode from './qr-code.svg';
import s from './Navbar.scss';

class Navbar extends Component {

  componentWillMount() {
    this.removeCss = s._insertCss();
  }

  componentWillUnmount() {
    this.removeCss();
  }

  qrInit() {
    if (connect.supports("VKWebAppOpenQR")) {
      connect.send("VKWebAppOpenQR");
    }
  }

  render() {
    return (
      <nav class={s.root} >
        <Link href='/future' class={s.item} activeClassName={s.active}>
          <News /><div>Новости</div>
        </Link>
        <Link href='/' class={s.item} activeClassName={s.active}>
          <Event /><div>Мероприятия</div>
        </Link>
        <Link href='/future' class={s.item} activeClassName={s.active}>
          <Man /><div>Волонтеры</div>
        </Link>
        <Link href='/account' class={s.item} activeClassName={s.active}>
          <Person /><div>Личный кабинет</div>
        </Link>
        <div onClick={this.qrInit} class={s.item} activeClassName={s.active}>
          <QRcode /><div>QR-код</div>
        </div>
      </nav>
    );
  }
}

export default Navbar
