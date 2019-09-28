import bind from 'autobind-decorator';
import { observable, action } from 'mobx';
import axios from 'axios';
const path = process.env.path;
console.log(path)

@bind
class Entity{
  @observable entity = {};
  @action
  load(id) {
    axios.get(path || `https://icanapp.ml:3443/entity/${id}`)
    .then(({ data }) => {
      this.entity = data;
    })
  }
}

export default Entity;