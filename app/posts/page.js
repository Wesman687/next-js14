import React from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import CreatePost from '../components/CreatePost'

async function Page(){

    const posts = await getDocs(collection(db, "posts"))
    return (
        
        <div>
            <div>
            <CreatePost />
            </div>
            <ul>
                {posts.docs.map(p => <li key={p.data().id}>{p.data().post}</li>)}
            </ul>
        </div>
    )
}

export default Page