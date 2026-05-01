"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href,children}) => {
    
          const pathName = usePathname();
          console.log( pathName)

const isActive = href === pathName

    return (

        <Link href={href} className={`${isActive ? "border-b-3 border-green-600" : "" }`}>
            {children}
        
        </Link>
    );
};

export default Navlink;