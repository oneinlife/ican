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
    connect
      .sendPromise('VKWebAppOpenQR')
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
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
