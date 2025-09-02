import * as React from "react";

const UserIcone = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={10.0001} cy={4.99999} r={3.33333} stroke="#1C274C" strokeWidth={1.5}/>
    <path d="M16.6645 15C16.6666 14.8632 16.6666 14.7242 16.6666 14.5833C16.6666 12.5123 13.6818 10.8333 9.99992 10.8333C6.31802 10.8333 3.33325 12.5123 3.33325 14.5833C3.33325 16.6544 3.33325 18.3333 9.99992 18.3333C11.8591 18.3333 13.1998 18.2028 14.1666 17.9695" stroke="#1C274C" strokeWidth={1.5} strokeLinecap="round"/>
    </svg>
  );
};

export default UserIcone;
