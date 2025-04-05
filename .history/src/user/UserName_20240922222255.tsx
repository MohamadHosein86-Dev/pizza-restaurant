import { useSelector } from "react-redux"

interface typex{
  user :{
      
  }
}
export default function UserName() {
  const {user} =useSelector((res:typex)=>res.user)
  return (
    <p className=" hidden uppercase text-stone-100 font-semibold text-sm md:block">  </p>
  )
}
