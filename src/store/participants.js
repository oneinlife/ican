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
                "fields": "photo_50",
                "v":"5.101",
                "group_id": "187019586", 
                "access_token":"40c662f640c662f640c662f61f40ab79fe440c640c662f61d485ba64fc0b492ce5457d0"
            }
        }
    ).then(({ response }) => {
      this.participants = response.items;
    })
  }
}

export default ParticipantsStore;
