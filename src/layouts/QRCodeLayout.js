import { h } from 'preact';
import style from 'styles/qr-code-layout.scss';
import QRCode from 'components/QRCode/QRCode';

function QRCodeLayout () {
  return (
    <div className={style.wrapper}>
      <QRCode />
    </div>
  );
}

export default QRCodeLayout
