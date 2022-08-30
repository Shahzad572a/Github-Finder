import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
 
function UsersItem({users:{login , avatar_url}}) {
  return (
    <div className='flex-row items-center space-x-4 card-body'>
        <div>
            <div className='avater'>
                <div className='rounded-full shadow w-14 h-14'>
                    <img src={avatar_url} alt="profile" />
                </div>
            </div>
        </div>
        <div>
            <h2 className="cart-title">{login}</h2>
            <Link className='text-base-content text-opacity-40' to={`/user/${login}`}>
                Visit Profile
            </Link>
        </div>
       </div>
  )
}
UsersItem.PopTypes={
    users:PropTypes.object.isRequired,
}

export default UsersItem
