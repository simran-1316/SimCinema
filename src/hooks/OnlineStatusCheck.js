import { useEffect, useState } from "react"

const OnlineStatusCheck = () => {
    const [onlineStatus, setOnlineStatus] = useState('');
    useEffect(() => {
        const handleOnline = () => {
            setOnlineStatus(true)
        };
        const handleOffline = () => {
            setOnlineStatus(false)
        }
        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        }
    }, []);
    return onlineStatus;
};

export default OnlineStatusCheck;