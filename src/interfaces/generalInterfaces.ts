export interface LoadingState {
    isLoading: boolean,
  }

export interface CommonErrorPayload {
    error?: {
        message: string,
        type: string,
    },
  }

export interface Payload {
    type?: 'string',
    payload?: string
}

export type PostType = {
  userId: number
  id: number
  title: string
  body: string
}