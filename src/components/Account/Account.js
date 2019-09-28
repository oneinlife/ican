import { h, Component } from 'preact';
import NarrowCard from '../Cards/NarrowCard/NarrowCard';
import s from './Account.scss';

class Account extends Component {

  componentWillMount() {
    this.removeCss = s._insertCss();
  }

  componentWillUnmount() {
    this.removeCss();
  }

  render() {

    const cardText = [
      {
        title: 'Расскажи друзьям',
        desc: 'Привлеки их к добрым делам и получи 25 поинтов',
      },
      {
        title: 'Расскажи друзьям',
        desc: 'Получи получи новый анимированный стикерпак',
      }
    ];

    return (
      <div class={s.root} >
        <div class={s.header}>
          <div class={s.points}>
            <div>301 <span>поинт</span></div>
            <button>Потратить</button>
          </div>
          <div class={s.description}>
            Вы получаете рейтинг за каждый совершенный поступок в приложении и участие в мероприятиях
          </div>
          <NarrowCard cardText={cardText} class={s.headerCard} />
        </div>
      </div>
    );
  }
}

export default Account
