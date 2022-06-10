import React from 'react';
import {format} from 'date-fns';
import {compose, withMemo} from '@truefit/bach';

type Props = {
  month: string;
};

const Menu = ({month}: Props) => (
  <div>
    <div>Home</div>
    <div>{month}&#39;s Menu</div>
  </div>
);

export default compose(withMemo('month', () => format(new Date(), 'MMMM')))(Menu);
