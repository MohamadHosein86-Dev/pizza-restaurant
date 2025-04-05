import { useSelector } from "react-redux"

interface typex{
  user :{
    userName:string
  }
}
export default function UserName() {
  const {userName} =useSelector((res:typex)=>res.user)
  return (
    <p className=" hidden uppercase text-stone-100 font-semibold text-sm md:block"> {userName} </p>
  )
}
