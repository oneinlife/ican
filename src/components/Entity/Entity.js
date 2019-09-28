import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';
import dayjs from 'dayjs';
import s from './Entity.scss';
import 'dayjs/locale/ru'



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
    const id = window.location.pathname.match(/(\d+)$/g);
    this.props.entity.load(id[0]);
  }

  render({ entity }) {
    const { entity: ee } = entity;
    const { img, action, entity: name, date_start, date_end, place } = ee;
    dayjs.locale('ru');
    return (
      <div class={s.root}>
        {img &&
          <img class={s.cardImg} src={`/static/${img}`} />
        }
        <div class={s.cardBoard}>
          <div class={s.cardName}>{name}</div>
          <div class={s.cardColor2}>{action}</div>
        </div>
        <div class={s.cardBoard}>
          <div class={`${s.cardColor2} ${s.cardTag}`}>Место</div>
          <div class={s.place}>{place}</div>
        </div>
        <div class={s.cardBoard}>
          <div class={`${s.cardColor2} ${s.cardTag}`}>Дата и время</div>
          <div class={s.other}>{dayjs(date_start).format('DD MMMM YYYY, HH:MM')}</div>
          <div>{dayjs(date_end).format('DD MMMM YYYY, HH:MM')}</div>
        </div>
        <div class={s.cardBoard}>
          <div class={`${s.cardColor2} ${s.cardTag}`}>Программа</div>
          <div class={s.other}>Посмотреть программу мероприятия</div>
        </div>
        <div class={s.cardBoard}>
          <div class={s.button}>Хочу участвовать</div>
          <div class={s.link}>Хочу быть волонтером</div>
        </div>
      </div>
    );
  }
}

export default Entity;
