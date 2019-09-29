import { h, Component } from 'preact';
import connect from '@vkontakte/vk-connect';
import NarrowCard from '../Cards/NarrowCard/NarrowCard';
import s from './Account.scss';

class Account extends Component {

  componentWillMount() {
    this.removeCss = s._insertCss();
  }

  componentWillUnmount() {
    this.removeCss();
  }

  qrInit() {
    connect.sendPromise("VKWebAppOpenQR")
    .then(data => {
      // Обработка события в случае успеха
      console.log(data);
    })
    .catch(error => {
      //Обработка событияв случае ошибки
    });
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
            <div>301<span>поинт</span></div>
            <button>Потратить</button>
          </div>
          <div class={s.description}>
            Вы получаете рейтинг за каждый совершенный поступок в приложении и участие в мероприятиях
          </div>
          <NarrowCard cardText={cardText} />
        </div>
        <div onClick={this.qrInit}>qr</div>
      </div>
    );
  }
}

export default Account
