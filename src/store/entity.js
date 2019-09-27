import bind from 'autobind-decorator';
import { observable, action } from 'mobx';
import axios from 'axios';
const path = process.env.path;

@bind
class EntityStore {
  @observable entity = [];

  @action
  load() {
    axios.get(path || 'http://localhost:3000')
    .then(({ data }) => {
      this.entity = data.entity;
    })
  }
}

export default EntityStore;
