import { h } from 'preact';
import style from 'styles/home-layout.scss';
import Entity from 'components/Entity/Entity';

function EntityLayout () {
  return (
    <div className={style.wrapper}>
      <Entity />
    </div>
  );
}

export default EntityLayout
