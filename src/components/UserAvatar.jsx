import Avatar from '../assets/cool-avatar.png'

function UserAvatar() {

  return (
    <div>
        <img className='bg-white rounded-full mb-2 w-8 h-8 lg:w-14 lg:h-14 lg:mr-3 lg:mb-3' src={Avatar}></img>
    </div>
  );
}

export default UserAvatar;