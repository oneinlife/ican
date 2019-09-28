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
    axios.get(path || 'https://icanapp.ml:3443/entity')
    .then(({ data }) => {
      this.entity = data.entitys;
    })
  }
}

export default EntityStore;
