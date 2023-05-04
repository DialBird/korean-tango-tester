<script lang="ts" setup>
import { useFirestore } from 'vuefire'
import { addDoc, collection } from 'firebase/firestore'

const { callopenAI } = useOpenAI()

const db = useFirestore()

const tangos = [
  { word: '양파', answer: '玉ねぎ' },
  { word: '여행', answer: '旅行' },
  { word: '인사', answer: '挨拶' },
  { word: '선물', answer: 'プレゼント' },
  
]

onMounted(() => {
  // callopenAI()
})

const tangosColRef = collection(db, 'tangos')

// tangos.forEach((tango) => {
//   addDoc(tangosColRef, tango)
// })
</script>

<template>
  <button class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">Button</button>
</template>
