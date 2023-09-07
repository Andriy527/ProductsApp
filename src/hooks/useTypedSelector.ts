import {TypedUseSelectorHook, useSelector} from "react-redux";
import {reducerType} from "../store/reducers";

export const useTypedSelector: TypedUseSelectorHook<reducerType> = useSelector;