import { h, Component } from 'preact';
import event from '../../../static/icons/event.svg';
import man from '../../../static/icons/man.svg';
import news from '../../../static/icons/news.svg';
import person from '../../../static/icons/person.svg';
import qrCode from '../../../static/icons/qr-code.svg';
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
        <div class={s.item}><div><img src={event} /></div><div>Новости</div></div>
        <div class={s.item}><div><img src={man} /></div><div>Мероприятия</div></div>
        <div class={s.item}><div><img src={news} /></div><div>Волонтеры</div></div>
        <div class={s.item}><div><img src={person} /></div><div>Личный кабинет</div></div>
        <div class={s.item}><div><img src={qrCode} /></div><div>QR-код</div></div>
      </div>
    );
  }
}


export default Navbar