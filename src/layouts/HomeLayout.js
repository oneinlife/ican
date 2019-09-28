import { h } from 'preact';
import style from 'styles/home-layout.scss';
import EntityList from 'components/EntityList/EntityList';

function HomeLayout () {
  return (
    <div className={style.wrapper}>
      <EntityList />
    </div>
  );
}

export default HomeLayout
