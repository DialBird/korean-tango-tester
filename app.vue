<script lang="ts" setup>
import { useCollection, useDocument } from 'vuefire'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { useFirestore } from 'vuefire'

const db = useFirestore()
const todos = collection(db, 'todos')
// setDoc(doc(db, "cities", "new-city-id"), {'name': 'Tokyo', 'country': 'Japan'})
// addDoc(todos, { text: 'Hello world!' })
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
