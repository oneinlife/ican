import {h, Component} from 'preact';
import { observer, inject } from 'mobx-preact';
import { toNumericStringWithDivider } from 'utils/helpers';
import s from './FlatsList.scss';

@inject('entityStore')
@observer
class FlatsList extends Component {

  componentWillMount() {
    this.removeCss = s._insertCss();
  }

  componentWillUnmount() {
    this.removeCss();
  }

  componentDidMount() {
    this.props.entityStore.load();
  }

  render ({ entityStore }) {
    const { entity } = entityStore;
    return (
      <div class={s.root}>
        {entity && entity.map(({entity: ee, action}) => (
          <div class={s.card}>
            <div>{ee}</div>
            <div>{action}</div>
          </div>
        ))}
      </div>
    );
  }
}

export default FlatsList;
