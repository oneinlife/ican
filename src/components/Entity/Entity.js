import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';
import dayjs from 'dayjs';
import s from './Entity.scss';

@inject('entity')
@observer
class Entity extends Component {

  componentWillMount() {
    this.removeCss = s._insertCss();
  }

  componentWillUnmount() {
    this.removeCss();
  }

  componentDidMount() {
    this.props.entity.load(this.props.id);
  }

  render({ entity }) {
    const { img, entity: ee, date_start, date_end, place } = entity;
    return (
      <div class={s.root}>
        {img &&
          <img class={s.cardImg} src={`static/${img}`} />
        }
        <div class={s.cardParams}>
          <div class={s.cardName}>{ee}</div>
          <div class={s.other}>{dayjs(date_start).format('DD.MM.YYYY')} - {dayjs(date_end).format('DD.MM.YYYY')}</div>
          <div class={s.other}>{place}</div>
        </div>
      </div>
    );
  }
}

export default Entity;
