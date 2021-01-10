import { ref, computed } from '@vue/composition-api'
import { messagesInterface } from './types'
import axios from 'axios'

const messages = ref(<messagesInterface[]>[])

const MessagesService = () => {
  const getMessages = async () => {
    // const hashtag = await axios.get<messagesInterface[]>('https://asia-northeast1-okanohikari-jp.cloudfunctions.net/webApi/v1/post')
    const webposts = await axios.get<messagesInterface[]>('https://asia-northeast1-okanohikari-jp.cloudfunctions.net/webApi/v1/webpost')
    // const combined = [...hashtag.data, ...webposts.data]
    const combined = [...webposts.data]
    const shuffled = combined.sort(() => Math.random() - 0.5)
    messages.value = shuffled
  }

  const postMessage = async (comment: string) => {
    if (!comment) return
    const post = {
      comment: comment
    }
    const response = await axios.post('https://asia-northeast1-okanohikari-jp.cloudfunctions.net/webApi/v1/webpost', post)
    console.log(response)
  }
  return {
    getMessages,
    postMessage,
    messages: computed(() => messages.value)
  }
}

export {
  MessagesService
}
