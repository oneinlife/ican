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
      <div class={s.root} >
        {cardText.map(item => (
          <div class={s.wrap}>
            <div class={s.title}>{item.title}</div>
            <div class={s.description}>{item.desc}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default NarrowCard
