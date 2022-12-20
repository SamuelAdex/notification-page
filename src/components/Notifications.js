import React from 'react';
import styled from 'styled-components';
import Notification from './Notification';

const Notifications = ({data}) => {
  return (
    <Div>
          {data.map((i) => (
            <Notification key={i.id} notify={i} />
        ))}
    </Div>
  )
}

export default Notifications;


const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 30px;
`;