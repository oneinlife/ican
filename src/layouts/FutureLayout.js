import { h } from 'preact';
import style from 'styles/home-layout.scss';

function FutureLayout() {
    return (
    <div style={{
        width: '100%',
        height: 'calc(100vh - 51px)',
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        color: 'rgba(69, 34, 77, 0.6)',
        'font-size': '2rem',
    }}>
        В разработке
    </div >
  );
}

export default FutureLayout
