"use client";

import { useAuthStore } from "@/store/auth.store";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

interface Iprops {
    children: React.ReactNode;
}

const AppLoader = ({ children }: Iprops) => {
    const { data: session, status } = useSession();
    const { setAuthState } = useAuthStore();

    useEffect(() => {
        setAuthState(status, session);
    }, [status, session, setAuthState])

    return <>{children}</>
}

export default AppLoader;