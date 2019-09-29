import EntityStore from './entity';
import ParticipantsStore from './participants';
import Entity from './entit';

export default {
  entityStore: new EntityStore(),
  participantsStore: new ParticipantsStore(),
  entity: new Entity(),
};
