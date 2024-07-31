import { db } from '@/firebase'
import { addDoc, collection } from 'firebase/firestore'
import { revalidatePath } from 'next/cache'
import React from 'react'

function CreatePost() {
    async function addPost(formData) {
        "use server"
        const post = formData.get("text")
        await addDoc(collection(db, "posts"), {
            post: post
        })
        revalidatePath("/posts")

    }

  return (
    <div>
        <h1 className='font-bold text-xl'>Create Post</h1>
        <form action={addPost}>
            <textarea name="text"
            className='border border-black w-[400px] resize-none' />
            <br />
            <button className='p-3 bg-blue-600 text-white w-full'>Post</button>
        </form>
    </div>
  )
}

export default CreatePost
