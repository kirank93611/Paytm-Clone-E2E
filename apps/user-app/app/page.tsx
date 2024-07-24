"use client"

import Image from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import {useBalance} from "@repo/store/balance"
import { Providers } from "../../providers";



export default function Home() {
  const balance=useBalance();
  return (
    <div>
      <Providers>
        hi there {balance}
      </Providers>
     
    </div>
  );
}
