import React, {useState} from 'react';
import styled from 'styled-components';

const Header = () => {
    const [isRead, setIsRead] = useState(false);

    const handleIsRead = ()=>{
        setIsRead(!isRead);
    }
  return (
    <Div>
        <div className="alert-wrapper">
            <h3>Notification</h3>
            <p className="badge">3</p>
        </div>
        <p className="as-read" onClick={handleIsRead}>Mark all as {isRead ? "unread" : "read"}</p>
    </Div>
  )
}

export default Header;

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    

    .alert-wrapper{
        display: flex;
        align-items: center;
        gap: 12px;
        
        .badge{
            cursor: pointer;
            background-color: #083479;
            padding: 4px 10px;
            border-radius: 5px;
            color: white;
            font-weight: bold;
        }
    }
    .as-read{
        cursor: pointer;
        color: #083479;
        font-weight: 500;

        &:hover{
            font-weight: 600;
        }
    }    
`;