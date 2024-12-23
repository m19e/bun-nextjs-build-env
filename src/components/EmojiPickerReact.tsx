'use client'
import dynamic from 'next/dynamic'

import { Categories, EmojiStyle } from 'emoji-picker-react'

const EmojiPicker = dynamic(() => import('emoji-picker-react'), {
  ssr: false,
})

export const Picker = () => {
  return (
    <EmojiPicker
      emojiStyle={EmojiStyle.TWITTER}
      onEmojiClick={(e) => console.log(e)}
      searchPlaceholder="検索"
      previewConfig={{
        defaultEmoji: '1f60e',
        defaultCaption: '今の気分はどう？',
      }}
      categories={[
        { category: Categories.SUGGESTED, name: 'よく使う絵文字' },
        { category: Categories.SMILEYS_PEOPLE, name: 'スマイリーと人' },
        { category: Categories.ANIMALS_NATURE, name: '動物と自然' },
        { category: Categories.FOOD_DRINK, name: 'フードとドリンク' },
        { category: Categories.TRAVEL_PLACES, name: '旅行と場所' },
        { category: Categories.ACTIVITIES, name: 'アクティビティ' },
        { category: Categories.OBJECTS, name: 'オブジェクト' },
        { category: Categories.SYMBOLS, name: '記号' },
        { category: Categories.FLAGS, name: '旗' },
      ]}
    />
  )
}
