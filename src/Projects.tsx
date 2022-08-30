import React, { useState } from 'react'
import client from "./config/sanityClient";

export default function Projects() {
  const [posts, setPosts] = useState<string[]>([]);

  /**
   * Fetches all project posts from Sanity.io,
   * and puts them in the "posts" state variable.
   */
  client.fetch(
    `*[_type == "post"] {
      title,
      slug,
      body,
      mainImage {
        asset -> {
          _id,
          url
        },
        alt
      }
    }`
  )
  .then(data => setPosts(data))
  .catch(console.error)


  return (
    <div>Projects</div>
  )
}
