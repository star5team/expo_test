import { StyleSheet, TouchableOpacity } from 'react-native'

import { ThemedText } from '@/components/ThemedText'
import { useState } from 'react'

export default function HomeScreen() {
  const [bgColor, setBgColor] = useState('#FFFFFF')

  const handleClick = () => {
    setBgColor(randomHexColorCode())
  }

  const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16)
    return '#' + n.slice(0, 6)
  }

  return (
    <TouchableOpacity
      style={[styles.titleContainer, { backgroundColor: bgColor }]}
      onPress={handleClick}
    >
      <ThemedText type='title'>Hello World</ThemedText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
