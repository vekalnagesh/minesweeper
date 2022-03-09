import { eventChannel } from "redux-saga";

export const WEB_SOCKET_URL = `wss://hometask.eg1236.com/game1/`;

class Singleton {
  private static socket: WebSocket;

  private constructor() {}

  public static getInstance(): WebSocket {
    if (!Singleton.socket) {
      Singleton.socket = new WebSocket(WEB_SOCKET_URL);
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
