import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';
import dayjs from 'dayjs';
import { toNumericStringWithDivider } from 'utils/helpers';
import s from './EntityList.scss';

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
        {entity && entity.map(({ entity: ee, date_start, date_end, img, place }) => (
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
        ))}
      </div>
    );
  }
}

export default EntityList;
