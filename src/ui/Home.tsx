import { useSelector } from "react-redux";
import CreateUser from "../user/CreateUser";
import Btn from "../comonentsRusing/Btn";

interface typex{
  userName :{
    username:string
  }
}
function Home() {
  const {username} =useSelector((res:typex)=>res.userName)
  return (
    <div className=" my-20 ">
      <h1 className="  text-xl  text-center font-semibold  sm:text-2xl  ">
         The best pizza.
         <br/>
         <span className="text-yellow-400"> Straight out of the oven, straight to you.</span>
      </h1>

   
        { username  == "" ? <CreateUser /> :
            <div className=" mx-auto mt-[1.5rem] w-[17rem]">
               <Btn  type="small" disabled={false} to="/menu" >continue ordring {username}</Btn>
            </div>
        }
     
    </div>
  );
}

export default Home;
