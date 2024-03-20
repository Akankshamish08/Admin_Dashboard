import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

 function Deposits() {
  return (
    <div className='flex justify-between flex-col gap-6'>
    <React.Fragment>
      <Title className='text-violet-600'>Recent Deposits</Title>
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2022
      </Typography>
      <div>
        <Link className='text-violet-600' href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
    </div>
  );
}
export default Deposits