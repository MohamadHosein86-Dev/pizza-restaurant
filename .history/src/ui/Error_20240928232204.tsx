import {  useRouteError } from 'react-router-dom';
import LinkBtn from '../comonentsRusing/LinkBtn';

function NotFound() {
  const error = useRouteError() as {data?:string , message?:string};
  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{error?.data || error?.message}</p>
      <LinkBtn to=""> &larr; Go back</LinkBtn>
    </div>
  );
}

export default NotFound;
