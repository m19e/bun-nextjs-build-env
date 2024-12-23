'use client'

import data from '@emoji-mart/data/sets/15/twitter.json'
import Picker from '@emoji-mart/react'
import type EmojiMart from 'emoji-mart'

type Emoji = {
  id: string
  name: string
  native: string
  unified: string
  keywords: string[]
  shortcodes: string
  aliases?: string[]
}

export const EmojiPicker = <T extends keyof typeof EmojiMart.Picker.Props>(
  props: Record<T, (typeof EmojiMart.Picker.Props)[T]['value']>,
) => {
  return (
    <Picker
      {...props}
      data={data}
      set="twitter"
      onEmojiSelect={(emoji: Emoji) =>
        console.log(JSON.stringify(emoji, null, 2))
      }
    />
  )
}
