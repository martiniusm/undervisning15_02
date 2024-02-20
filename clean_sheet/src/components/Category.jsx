import { useParams } from "react-router-dom"
import { posts } from "../assets/post"
import { useState } from "react"
import { useEffect } from "react"
import PostCard from "./PostCard"

export default function Category(){
    const {slug} = useParams()
    const[post, setPost] = useState()

    useEffect(() => {
        setPost(posts.filter(post => post.category === slug))
    },[])

    console.log("Sjekk", post)
    return (
        <section>
          <h1>{slug}</h1> 
          {post?.map(item => 
          <PostCard 
            key={item.id} 
            title={item.title} 
            ingress={item.ingress} 
            category={item.category} 
            id={item.id} 
          />)}
        </section>
    )
}