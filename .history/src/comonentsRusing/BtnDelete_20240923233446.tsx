import Btn from "./Btn";

interface tyeoe{
    onclick:()=>void
}
export default function BtnDelete({onclick}:tyeoe) {
  return <Btn onclick={onclick} type="small" disabled={false} to="">Delete</Btn>
}
