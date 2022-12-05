    
    import { dbState,AppForm } from "./AppController";

    //typeguard
    const nameTypeguard = (x: string| undefined | null): x is string  => { return typeof x === 'string' };

   //typemap
   const dbToApp: (item: dbState) => AppUser = item => {
    let first = item.name?.split(',')[0];
    let last = item.name?.split(',')[1];
    //if(!nameTypeguard(first)) first = 'first name';
    //if(!nameTypeguard(last)) last = 'last name';
    return {
        firstName: first? first : '',
        lastName: last? last: '',
        email: item.email? item.email: ''
    }
    }

            //Get user from db
            const fetchUser = ():dbState => {    
                const existingUser = {            
                name: 'bob,johnson',
                age: null,
                email: 'bob@gmail.com'}
                return existingUser
    
            }

    export default {
        nameTypeguard,
        dbToApp,
        fetchUser,
    }



        

