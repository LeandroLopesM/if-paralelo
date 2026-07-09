import { useFonts } from 'expo-font';
import Home from './home';

export default function App() {
    const [loaded, error] = useFonts({
        'Elinkos': require('@/assets/fonts/Elinkos.ttf'),
        'RobotoSlab': require('@/assets/fonts/RobotoSlab.ttf'),
    });
    
    return (
        <Home />
    )
}