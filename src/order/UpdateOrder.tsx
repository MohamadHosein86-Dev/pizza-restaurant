import { useFetcher } from "react-router-dom";
import Btn from "../comonentsRusing/Btn";

interface PizzaItem {
  quantity: string;
  name: string;
  totalPrice: string;
  pizzaId: number;
}

interface OrderData {
  id: number;
  status: string;
  priority: boolean;
  priorityPrice: number;
  orderPrice: number;
  estimatedDelivery: string;
  cart: PizzaItem[];
}


export default function UpdateOrder() {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Btn type="primry"  to="" onClick={() => {}} disabled={false}>
        Priority
      </Btn>
    </fetcher.Form>
  );
}

async function updateOrder(id: string, updateObj: Partial<OrderData>) {
  try {
    const res = await fetch(`https://react-fast-pizza-api.onrender.com/api/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw new Error();
  } 
  catch {
    throw new Error('Failed updating your order');
  }
}

export async function action({  params }: { request: Request; params: { orderId: string } }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  
  return null;
}