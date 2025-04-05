import { useSelector } from "react-redux"

interface typex{
  user :{
    username:string
  }
}
export default function UserName() {
  const {username} =useSelector((res:typex)=>res.user)
  return (
    <p className=" hidden uppercase text-stone-100 font-semibold text-sm md:block"> {username} </p>
  )
}
