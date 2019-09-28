import { h, Component } from 'preact';
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

  render() {
    return (
      <div class={s.root} >
        <div class={s.item}><News /><div>Новости</div></div>
        <div class={s.item}><Event /><div>Мероприятия</div></div>
        <div class={s.item}><Man /><div>Волонтеры</div></div>
        <div class={s.item}><Person /><div>Личный кабинет</div></div>
        <div class={s.item}><QRcode /><div>QR-код</div></div>
      </div>
    );
  }
}


export default Navbar
