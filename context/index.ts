import { createContext, useEffect } from "react";
import { useRouter } from 'next/router';
import axios from 'axios';
import { createClassifier } from "typescript";

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

const useReducer = (
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
};
};