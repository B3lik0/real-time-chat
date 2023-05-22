import { io } from 'socket.io-client';
class SocketioService {
    socket: any;
    constructor() {
        this.socket = io('http://localhost:3000/')
    }
}

// export default new SocketioService();
export const socket = new SocketioService().socket;
