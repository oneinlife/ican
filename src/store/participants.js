import bind from 'autobind-decorator';
import { observable, action } from 'mobx';
import connect from '@vkontakte/vk-connect';
const path = process.env.path;
console.log(path)

@bind
class ParticipantsStore {
  @observable participants = [];
  @action
  load() {
    connect.sendPromise(
        "VKWebAppCallAPIMethod",
        {
            "method": "groups.getMembers",
            "params": {
                "fields": "photo_200",
                "v":"5.101",
                "group_id": "187019586", 
                "access_token":"your_token"
            }
        }
    ).then(({ data }) => {
      this.participants = data.entitys;
    })
  }
}

export default ParticipantsStore;
