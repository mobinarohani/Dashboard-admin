import React ,{useState , useEffect} from 'react'
import './NewUser.css'
export default function NewUser() {

  const[Alluser,setAlluser]=useState([])
  const[userName,setuserName]=useState("")
  const[email,setemail]=useState("")
  const[status,setstatus]=useState("active")
  const[transaction,settransaction]=useState("")
  const[img,setimg]=useState("avatar8.png")


  const [statusInput,setstatusInput]=useState(false);
  const [statusInputSend,setstatusInputSend]=useState(false);

  const setProfile=(img)=>{
    setimg(img.target.src);
  }


  useEffect(() => {
    async function fetchUserData() {
      await fetch("http://localhost:3000/userRow")
        .then((respons)=>respons.json())
        .then((data)=>setAlluser(data));
    }
    fetchUserData();
  }, []);


  const Adduser=()=>{
    if(userName && email && transaction){
      setstatusInput(false)
      console.log(status);
      let newUser={
        id:String(Alluser.length+1),
        username:userName,
        email:email,
        status:status,
        transaction:transaction,
        img:img
      }

      async function fetchPostUser(){
        await fetch("http://localhost:3000/userRow",{
          method:"POST",
          body:JSON.stringify(newUser)
        })
        .then(respons=>{
          if(respons.status==201){
            setstatusInputSend(true)
          }
        })
      }

      fetchPostUser()

      setTimeout(() => {
        setstatusInputSend(false)
      }, 3000)
    }else{
      setstatusInput(true)
    }
  }

  return (
    <div className='newUser'>
      <div className="newUserContainer">
        <div className="newUser__header">
          <div className="newUser__Profile">
            <img src="/avatar8.png" alt="" className='usernameCover' onClick={(event)=>setProfile(event)}/>
            <img src="/avatar33.png" alt="" className='usernameCover' onClick={(event)=>setProfile(event)}/>
            <img src="/avatar4.png" alt="" className='usernameCover' onClick={(event)=>setProfile(event)}/>
            <img src="/avatar5.png" alt="" className='usernameCover' onClick={(event)=>setProfile(event)}/>
            <img src="/avatar6.png" alt="" className='usernameCover' onClick={(event)=>setProfile(event)}/>
            <img src="/avatar2.png" alt="" className='usernameCover' onClick={(event)=>setProfile(event)}/>
          </div>
          <div className="newUser__info">
            <span className="usernameTitle">{userName}</span>
            <img src={img} alt="" className='usernameProfile' />
          </div>
        </div>
        <div className="newUser_inputs">
          {statusInput &&<h5 className='newinput-message'>لطفا اطلاعات را کامل وارد کنید</h5>}
          {statusInputSend &&<h5 className='newinput-message'>کاربر ثبت شد</h5>}
          <div className="newUser_inputStyle">
            <input type="text" placeholder='نام کاربری' value={userName} className="input__Style" onChange={(event)=>setuserName(event.target.value)}/>
            <input type="text" placeholder='ایمیل' value={email} className="input__Style" onChange={(event)=>setemail(event.target.value)}/>
          </div>
          <div className="newUser_inputStyle">
            <select
              name="status"
              id="status"
              className="input__Style"
              value={status}
              onChange={(event)=>setstatus(event.target.value)}
            >
              <option value="active">active</option>
              <option value="non-active">non-active</option>
            </select>
            <input type="text" placeholder='تراکنش' value={transaction} className="input__Style" onChange={(event)=>settransaction(event.target.value)}/>
          </div>
          <div className="newUser_inputStyle">
            <button className='newUser__btn' onClick={Adduser}>ثبت</button>
          </div>
        </div>
      </div>
    </div>
  )
}
