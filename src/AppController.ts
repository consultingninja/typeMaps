import React, {useState } from "react"


export const AppController = ():AppState => {
    const [authMethod,setAuthMethod] = useState<string>('');
    const [user, setUser] = useState<AppUser>({
        firstName: '',
        lastName: '',
        email: '',
    });

    const fetchUser = ():dbUser =>{
        return{
            name: "Bob,Johsnon",
            email: "bob@gmail.com"
        }
    }

    //typeguard
    const stringGuard = (thing: string | undefined | null): thing is string => {return typeof thing === "string"}

    //typemap
    const dbToApp: (user:dbUser) => AppUser = user =>{
        let first = user.name?.split(',')[0];
        let last = user.name?.split(',')[1];
        let email = user.email;
        if(!stringGuard(first)) first = '';
        if(!stringGuard(last)) last = '';
        if(!stringGuard(email)) email = '';

        return{
            firstName: first,
            lastName: last,
            email: email,
        }
    }

    const handleSignIn =(form?:React.FormEvent<HTMLFormElement>,button?:React.MouseEvent<HTMLButtonElement, MouseEvent>):void =>{
        if(button){
            setAuthMethod('3rdParty');
            const existingUser = dbToApp(fetchUser());
            setUser(existingUser);
        }

    }

    return {
        state: user,
        authMethod: authMethod,
        handleSignIn: handleSignIn
    }
}


export interface AppState {
    state: AppUser,
    authMethod: string,
    handleSignIn: (form?:React.FormEvent<HTMLFormElement>,button?:React.MouseEvent<HTMLButtonElement, MouseEvent>)  => void
}

export interface AppUser {
    firstName: string,
    lastName: string,
    email: string,
}

export interface dbUser {
    name: string | null,
    email: string | null

}

