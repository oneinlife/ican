import { h } from 'preact';
import style from 'styles/account-layout.scss';
import Account from 'components/Account/Account';

function AccountLayout () {
  return (
    <div className={style.wrapper}>
      <Account />
    </div>
  );
}

export default AccountLayout
