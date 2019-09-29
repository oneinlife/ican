import { h, Component } from 'preact';
import { observer, inject } from 'mobx-preact';


@inject('participantsStore')
@observer
class Participants extends Component {
/*
  componentWillMount() {
    this.removeCss = s._insertCss();
  }

  componentWillUnmount() {
    this.removeCss();
  }
*/
  componentDidMount() {
    this.props.participantsStore.load();
  }

  render({ participantsStore }) {
    const { entity: ee } = participantsStore;
    return (
      <div >
      </div>
    );
  }
}

export default Participants;
