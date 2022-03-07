import { eventChannel } from "redux-saga";

export const WEB_SOCKET_URL = `wss://hometask.eg1236.com/game1/`;

class Singleton {
  private static socket: WebSocket;

  private constructor() {}

  public static getInstance(): WebSocket {
    if (!Singleton.socket) {
      Singleton.socket = new WebSocket(WEB_SOCKET_URL);

      // this.socket.onmessage = (ev: MessageEvent) => {

      //     if(ev.returnValue) {
      //         const data = ev.data;
      //         console.log("onMessage", data);
      //     } else {
      //         console.log("is Else part");
      //     }
      // }

      // this.socket.onopen = (ev: Event) => {
      //     console.log("websocket is open");
      //     this.socket.send('help');
      // }

      // this.socket.onerror = (ev: Event) => {
      //     console.log(`websocket error is ${ev}`);
      //     console.error(ev);
      // }

      // this.socket.onclose = (ev: CloseEvent) => {
      //     console.log("websocket is closed");
      // }
    }
    return Singleton.socket;
  }
}

const ConnectWebsocket = () => {
  return Singleton.getInstance();
};

export const WebsocketChannel = (message: string): any => {
  return eventChannel((emitter) => {
    const socket = ConnectWebsocket();
    socket.send(message);

    const messageHandler = (event: MessageEvent) => {
      emitter(event.data);
    };

    const errorHandler = (errorEvent: Event) => {
      emitter(errorEvent);
    };

    const unsubscribe = (event: CloseEvent) => {
      console.log("websocket is closed");
    };

    socket.onmessage = messageHandler;
    socket.onerror = errorHandler;
    socket.onclose = unsubscribe;

    return () => {
      console.log("websocket is closed");
      return true;
    };
  });
};
ConnectWebsocket();

export default WebsocketChannel;
