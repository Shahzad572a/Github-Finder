import React,{useState,useContext} from 'react'
import GithubContext from '../../Context/Github/GithubContext'
import AlertContext from '../../Context/Alert/AlertContext'
import {searchUsers} from '../../Context/Github/GithubAction'
function UsersSearch() {
    const {users,dispatch,clearUsers} =useContext(GithubContext)
    const {setAlert}=useContext(AlertContext)

    const [text,setText] = useState('')

   const onChangeHandler = (e) => {
   
    setText(e.target.value)
   }
    const submitHandler= async (e) =>{
        e.preventDefault()
        if(text===''){
           setAlert('Please enter something','error') 
        }else{
             dispatch({type:'SET_LOADING'})
             const users = await searchUsers(text)
             dispatch({type:'GET_USERS',payload:users})
            setText('')
        }
    }
  return (
    <div className='grid grid-cols-1 xl:grid-cols-2
    lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={submitHandler}>
            <div className='form-control'>
                <div className='relative'>
                    <input 
                    type="text" 
                    className='w-full pr-40
                    bg-gray-200  input-lg text-black' 
                    placeholder='Search'
                   onChange={onChangeHandler}
                    />
                    
                    <button
                    type='submit'
                    className="absolute top-0 right-0 rounded-l-none
                    w-36 btn btn-lg">
                        Go
                    </button>
                </div>
            </div>
        </form>
      </div>
      {users.length>0 && (
        <div>
        <button className='btn btn-ghost btn-lg' onClick={clearUsers}>
            Clear
            </button>
      </div>
      )}
      
    </div>
  )
}

export default UsersSearch
