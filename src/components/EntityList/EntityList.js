import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';
import dayjs from 'dayjs';
import { toNumericStringWithDivider } from 'utils/helpers';
import s from './EntityList.scss';
import { Router, Link } from 'preact-router';


@inject('entityStore')
@observer
class EntityList extends Component {

  componentWillMount() {
    this.removeCss = s._insertCss();
  }

  componentWillUnmount() {
    this.removeCss();
  }

  componentDidMount() {
    this.props.entityStore.load();
  }

  render({ entityStore }) {
    const { entity } = entityStore;
    return (
      <div class={s.root}>
        {entity && entity.map(({ id, entity: ee, date_start, date_end, img, place }) => (
          <Link class={s.list} href={`/entity/${id}`}>
            <div class={s.card}>
              {img &&
                <img class={s.cardImg} src={`static/${img}`} />
              }
              <div class={s.cardParams}>
                <div class={s.cardName}>{ee}</div>
                <div class={s.other}>{dayjs(date_start).format('DD.MM.YYYY')} - {dayjs(date_end).format('DD.MM.YYYY')}</div>
                <div class={s.other}>{place}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default EntityList;
