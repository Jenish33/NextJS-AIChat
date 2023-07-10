/* eslint-disable prettier/prettier */
import { ChatCompletionRequestMessage } from 'openai'

export const sendMessage = async (messages: ChatCompletionRequestMessage[]) => {
  try {
    const response = await fetch('/api/createMessage', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ messages })
    })
    return await response.json()
  } catch (error) {
    console.log(error)
  }
}
