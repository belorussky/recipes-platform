"use client";

import { useAuthStore } from "@/store/auth.store";
import { useIngredientStore } from "@/store/ingredient.store";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

interface Iprops {
    children: React.ReactNode;
}

const AppLoader = ({ children }: Iprops) => {
    const { data: session, status } = useSession();
    const { loadIngredients } = useIngredientStore();
    const { isAuth, setAuthState } = useAuthStore();

    useEffect(() => {
        setAuthState(status, session);
    }, [status, session, setAuthState])

    useEffect(() => {
        if (isAuth) {
            loadIngredients();
        }
    }, [isAuth, loadIngredients])

    return <>{children}</>
}

export default AppLoader;