import { h, Component } from 'preact';
import connect from '@vkontakte/vk-connect';
import s from './QRCode.scss';

class QRCode extends Component {

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

    return (
      <div class={s.root} >
        <div onClick={this.qrInit}>qr beta</div>
      </div>
    );
  }
}

export default QRCode
