import React from "react";
interface Props {
  children: string;
}
const button ({ children }: Props) =>{
  return <button className="btn btn-primary">{children}</button>
}

export default button;
