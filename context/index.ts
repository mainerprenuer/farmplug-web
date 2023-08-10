import { useReducer, createContext, useEffect } from "react";
import { useRouter } from 'next/router';
import axios from 'axios';

type Props ={
    children: React.ReactNode;
};

const initialState = {
    user: null,
};

type Context = {
    state: Record<string, any>;
    dispatch: (action:{ type: string; payload: any }) => void;
};

const initialContext: Context = {
    state: initialState,
    dispatch: () => null,
}

const Context = createContext<Context>(initialContext);

const userReducer = (
    state: Record<string, any>,
    action: { type: string; payload: any}
) => {
switch (action.type) {
    case 'LOGIN':
        return {
            ...state,
            user: action.payload
        };
    case 'LOGOUT':
        return {
            ...state,
            user: null,
        };
    case 'UPDATE_USER':
        return {
            ...state,
            user: action.payload
        };
    default:
        return state;
    }
};
const Provider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(userReducer, initialState);
    const router = useRouter();

    useEffect(() => {
        dispatch({
            type: 'LOGIN',
            payload: localStorage.getItem('_farm_user')
            ? JSON.parse(localStorage.getItem('_farm_user') || '{}')
            : null,
        });
        return;
    }, []);
};