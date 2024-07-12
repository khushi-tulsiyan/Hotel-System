import React, { useEffect, useState} from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = "http://127.0.0.1:5000";

const RealTimeUpdates = () => {
    const [response, setResponse] = useState("");

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("FromAPI", data => {
        });
    }, []);

    return(
        <p>
            Real-time Data: {response}
        </p>
    );
};

export default RealTimeUpdates;