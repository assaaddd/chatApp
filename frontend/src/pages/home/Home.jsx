import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import MessageContainer from '../../components/messages/MessageContainer';

function Home() {
  return (
    <div className='flex sm:h-[450px] md:h-[560px] rounded-lg overflow-hidden bg-black bg-clip-padding backdrop-filter backdrop-blur-lg'> 
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home
