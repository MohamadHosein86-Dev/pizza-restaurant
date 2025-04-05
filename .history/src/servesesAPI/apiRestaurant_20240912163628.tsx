const API_URL = 'https://react-fast-pizza-api.onrender.com/api';



export async function updateOrder(id:string, updateObj:string) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } 
  catch  {
    throw Error('Failed updating your order');
  }
}
