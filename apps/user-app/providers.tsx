"use client"

import { SessionProvider } from "next-auth/react";

export const Providers = ({children}: {children: React.ReactNode}) => {
    return (
        <html>
            <body>
              {children}
            </body>
        </html>
         )
             
}