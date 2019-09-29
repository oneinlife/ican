import { h, Component } from 'preact';
import s from './NarrowCard.scss';

class NarrowCard extends Component {

  componentWillMount() {
    this.removeCss = s._insertCss();
  }

  componentWillUnmount() {
    this.removeCss();
  }

  render({ cardText }) {
    console.log(cardText)
    return (
      <div class={s.root}>
        <div class={s.wrap}>
          {cardText.map(item => (
            <div class={s.card}>
              <div class={s.title}>{item.title}</div>
              <div class={s.description}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default NarrowCard
