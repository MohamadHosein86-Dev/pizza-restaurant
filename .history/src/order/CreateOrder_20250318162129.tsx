import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import Btn from "../comonentsRusing/Btn";
import { useDispatch, useSelector } from "react-redux";
import { claerCart, getCart, getprice } from "../cart/CartReducer";
import { useState } from "react";
import { formatCurrency } from "../funcHelper/Helpers";
import EmptyCart from "../cart/EmptyCart";
import store from "../Store";
import { fetchAddress } from "../user/UserSlice";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
);



interface typex{
  userName :{
    username:string,
    status : string
    position : {
      latitude:number,
      longitude:number
    }
    address:string,
    error:string
  }
}
interface formData{
  phone :string
}
function CreateOrder() {
  const dispatch = useDispatch()

  const [withPriority, setWithPriority] = useState<boolean>(false);
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getprice);
  const priority = withPriority ? totalCartPrice * 0.2 : 0 ;
  const totalprice = priority + totalCartPrice;
  const formData  = useActionData() as formData | null
  const navigation = useNavigation();
  const issubmit = navigation.state == "submitting";
  const {username ,status , position , address , error} =useSelector((res:typex)=>res.userName);
  const loading = status === "loading";

  function handleposition(x: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    x.preventDefault();
    const dispatch = useDispatch<AppDispatch>(); // تایپ صحیح dispatch
    dispatch(fetchAddress()); // فراخوانی اکشن
  }

  if(!cart.length) return <EmptyCart />;


  return (
    <div className=" px-4 py-6">
      <h2 className=" mb-8 text-xl font-semibold">Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input defaultValue={username} className="input grow" type="text" name="customer" required />
          
        </div>


        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className=" grow">
            <input className="input w-full" type="tel" name="phone" required />
            {formData?.phone && <p className=" text-sm mt-2 rounded-md bg-red-100 p-2 text-red-700 ">{formData.phone}</p> }
          </div>
        </div>


        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center relative">
          <label className="sm:basis-40">Address</label>
          <div className=" grow">
            <input type="text" name="address" required
            className="input w-full" disabled={loading} defaultValue={address} />
          {status == "error" && <p className=" text-sm mt-2 rounded-md bg-red-100 p-2 text-red-700 ">{error}</p> }
          </div>
          {!position.latitude && !position.longitude &&  <span className=" absolute right-[3px] top-[34px] sm:top-[2px] md:top-[3px]">  <Btn type="small" to="" disabled={loading} onClick={handleposition}>get posotion</Btn>  </span>}         
         </div>


        <div className=" mb-12 flex items-center gap-5">
          <input
            className=" m-2 w-6 h-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2 "
            type="checkbox"
            name="priority"
            id="priority11"
            value={withPriority}
            onChange={(x)=> setWithPriority(x.target.checked) }
          />
          <label className=" font-medium" htmlFor="priority11" >Want to yo give your order priority?</label>
        </div>


        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input type="hidden" name="position" value={position.latitude && position.longitude ? `${position.latitude} ${position.longitude}` : ''} />
           <Btn onClick={()=>{}} type="primry" to="" disabled={issubmit || loading} >{ issubmit ? "plasing order..." :<>{formatCurrency(totalprice)} Order now </>}</Btn>
        </div>


      </Form>

    </div>
  );
}


 

async function createOrder(newOrder:object) {
  try {
    const res = await fetch(`https://react-fast-pizza-api.onrender.com/api/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    console.log(res);
    
    return data;
  } 
  catch {
    throw Error('Failed creating your order');
  }
}
interface rtde{
  cart:string[],
  priority:boolean,
  phone:string
}
interface typeerrror{
  phone?:string
}

export async function action({request}:{request :Request}) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  
  const order :rtde = {
    ...data ,
    cart:JSON.parse(String(data.cart)),
    priority:data.priority === "true" ,
    phone:String(data.phone)
  }; 
  const errors :typeerrror = {}
  if(!isValidPhone(order.phone))
    errors.phone ="plase enter your phone number becase we need to your phone number";
  
  if(Object.keys(errors).length > 0)return errors;

  const newOrder = await createOrder(order);

  store.dispatch(claerCart())
  return redirect(`/order/${newOrder.id}`);
  
}
export default CreateOrder;
