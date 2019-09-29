import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';
import s from './Participants.scss';


@inject('participantsStore')
@observer
class Participants extends Component {
  componentWillMount() {
    this.removeCss = s._insertCss();
  }

  componentWillUnmount() {
    this.removeCss();
  }
  componentDidMount() {
    this.props.participantsStore.load();
  }

  render({ participantsStore }) {
    const { participants } = participantsStore;
    return (
      <div class={s.wrap}>
        {participants.map(({photo_50}) => <img class={s.img} src={photo_50} />)}
      </div>
    );
  }
}

export default Participants;
