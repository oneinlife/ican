import bind from 'autobind-decorator';
import { observable, action } from 'mobx';
import axios from 'axios';
const path = process.env.path;
console.log(path)

@bind
class EntityStore {
  @observable entity = [];
  @action
  load() {
    axios.get(path || 'http://194.58.104.250:3000')
    .then(({ data }) => {
      this.entity = data.entity;
    })
  }
}

export default EntityStore;
