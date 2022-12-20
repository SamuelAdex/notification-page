import React, {useState} from 'react'
import styled from 'styled-components';
import imgPic from '../assets/images/avatar-mark-webber.webp';

const Notification = ({notify}) => {
    const [hasMessage, setHasMessage] = useState(false);

    const handleAccordion = (msg)=>{
        if(msg){
            setHasMessage(!hasMessage);
        }
    }
  return (
    <Div onClick={()=> handleAccordion(notify.message)}>
        <div className="avatar-wrapper">
            <img src={notify.avatar} alt="" />
        </div>
        <div className="action-wrapper">
            <div className="action">
                <div className="username">{notify.username}</div>
                {notify.notification && <p className="notification">{notify.notification}</p>}
                {notify.group && <p className="group">{notify.group}</p>}
                {notify.reactedTo && <p className="reacted">{notify.reactedTo}</p>}
            </div>
            <small>{notify.createdAt}</small>
            {notify.message && hasMessage && <div className="message">
                <p>{notify.message}</p>
            </div>}
        </div>
        <div className="img-wrapper">
            <img src={notify.pictureCommentedOn} alt="" />
        </div>
    </Div>
  )
}

export default Notification

const Div = styled.div`
    display: flex;    
    gap: 12px;
    width: 100%;
    padding: 12px;
    border-radius: 12px;
    transition: .3s ease-in-out;
    cursor: pointer;
    position: relative;

    &:hover{
        background-color: rgb(246, 250, 253);        
    }

    .avatar-wrapper{
        img{
            width: 60px;
        }
    }
    .action-wrapper{
        .action{
            display: flex;
            align-items: center;
            gap: 5px;

            .username{
                font-weight: bold;
                transition: .3s ease-in-out;

                &:hover{
                    color: #083479;
                }
            }

            .notification{
                color: grey;
            }

            .group, .reacted{
                color: #083479;
                font-weight: bold;                
            }
        }
        small{
            color: grey;
            font-size: 13px;
        }
        .message{
            padding: 12px;
            border-radius: 12px;
            background-color: rgb(246, 250, 253);
            font-size: 12px;
            color: #083479;
            margin-top: 12px;
            width: 650px;           

            p{
                font-size: 14px;
                line-height: 25px;

            }
            
        }
    }

    .img-wrapper{
        position: absolute;
        right: 50px;
        img{
            width: 50px;
        }
    }

    @media screen and (min-width: 280px) and (max-width: 1080px){
        .avatar-wrapper{
            img{
                width: 40px;
            }
        }
        .action-wrapper{
            .action{
                flex-wrap: wrap;

                .username, .group{
                    font-size: 15px;
                }
                .reacted{
                    font-size: 13px;
                }
            }
            .message{
                position: relative;
                max-width: 200px;                

                p{
                    font-size: 12px;
                    line-height: 20px;
                }
            }
        }
        .img-wrapper{
            position: absolute;
            right: 10px;
            img{
                width: 20px;
            }
        }

    }
`;