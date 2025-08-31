
export enum Author {
  USER = 'user',
  STRANGER = 'stranger',
  SYSTEM = 'system',
}

export interface ChatMessage {
  id: string;
  author: Author;
  text: string;
}

export enum ChatStatus {
  IDLE = 'idle',
  SEARCHING = 'searching',
  CONNECTED = 'connected',
  DISCONNECTED = 'disconnected',
  ERROR = 'error',
}

export interface AdminStats {
  activeUsers: number;
  chatsToday: number;
  avgChatDuration: string;
  topInterests: { name: string; value: number }[];
}
