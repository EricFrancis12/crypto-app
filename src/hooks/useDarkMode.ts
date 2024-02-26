import { useSelector } from 'react-redux';
import { TStoreState } from '../typings/reducer-types';

export default function useDarkMode() {
    const darkMode = useSelector((state: TStoreState) => state.darkMode);
    return darkMode;
}
