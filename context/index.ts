import { useReducer, createContext, useEffect } from "react";
import { useRouter } from 'next/router';
import axios from 'axios';

type Props ={
    children: React.ReactNode;
}

const initialState = {
    user: null,
}