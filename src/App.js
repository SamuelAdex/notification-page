import styled from 'styled-components';
import Notifications from './components/Notifications';
import Header from './components/Header'
import mark from './assets/images/avatar-mark-webber.webp';
import angela from './assets/images/avatar-angela-gray.webp';
import jacob from './assets/images/avatar-jacob-thompson.webp';
import rizky from './assets/images/avatar-rizky-hasanuddin.webp';
import smith from './assets/images/avatar-kimberly-smith.webp';
import nathan from './assets/images/avatar-nathan-peterson.webp';
import anna from './assets/images/avatar-anna-kim.webp';
import pic from './assets/images/image-chess.webp'

function App() {
  const data = [
    {
      id: 1,
      username: 'Mark Webber',
      avatar: mark,
      notification: 'reacted to your recent post',
      message: '',
      createdAt: '1m ago',
      following: '',
      group: '',
      reactedTo: 'My first tournament today',
      pictureCommentedOn: ''
    },
    {
      id: 2,
      username: 'Angela Gray',
      avatar: angela,
      notification: 'following you',
      message: '',
      createdAt: '3m ago',
      following: '',
      group: '',
      reactedTo: '',
      pictureCommentedOn: ''
    },
    {
      id: 3,
      username: 'Jacob Thompson',
      avatar: jacob,
      notification: 'has joined your group',
      message: '',
      createdAt: '1 day ago',
      following: '',
      group: 'Chess Club',
      reactedTo: '',
      pictureCommentedOn: ''
    },
    {
      id: 4,
      username: 'Rizky Hasanuddin',
      avatar: rizky,
      notification: 'sent you a private message',
      message: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis accusantium voluptatum cum nihil velit dicta, cupiditate?',
      createdAt: '5 days ago',
      following: '',
      group: '',
      reactedTo: '',
      pictureCommentedOn: ''
    },
    {
      id: 5,
      username: 'Kimberly Smith',
      avatar: smith,
      notification: 'commented on your picture',
      message: '',
      createdAt: '1 week ago',
      following: '',
      group: '',
      reactedTo: '',
      pictureCommentedOn: pic
    },
    {
      id: 6,
      username: 'Nathan Peterson',
      avatar: nathan,
      notification: 'reacted to your recent post',
      message: '',
      createdAt: '2 weeks ago',
      following: '',
      group: '',
      reactedTo: '5 end-game strategies to increase your win rate',
      pictureCommentedOn: ''
    },
    {
      id: 7,
      username: 'Anna Kim',
      avatar: anna,
      notification: 'left the group ',
      message: '',
      createdAt: '2 weeks ago',
      following: '',
      group: 'Chess Club',
      reactedTo: '',
      pictureCommentedOn: ''
    },
  ]
  return (
    <Div>
      <div className="container">
        <Header /> 
        <Notifications data={data} />  
      </div>
    </Div>
  );
}

export default App;


const Div = styled.div`  
  display: grid;
  place-items: center;
  height: 100vh;

  .container{
    border-radius: 10px;
    padding: 20px;    
    min-width: 600px;  
    margin: 40px;  
    -webkit-box-shadow: 0px -1px 5px 5px rgba(227,227,227,1);
-moz-box-shadow: 0px -1px 5px 5px rgba(227,227,227,1);
box-shadow: 0px -1px 5px 5px rgba(227,227,227,1);
  }

    @media screen and (min-width: 280px) and (max-width: 1080px){    
    .container{      
      min-width: 100%;
      margin: 0;
    }
  }
`;