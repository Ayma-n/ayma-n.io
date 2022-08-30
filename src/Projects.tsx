import React, { useState } from 'react'
import client from "./config/sanityClient";

export default function Projects() {
  const [projects, setProjects] = useState<string[]>([]);

  /**
   * Fetches all project posts from Sanity.io,
   * and puts them in the "posts" state variable.
   */
  client.fetch(
    `*[_type == "project"] {
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
    .then(data => setProjects(data))
    .catch(console.error)


  return (<>
    <div>Projects</div>
    <div id="all-projects">
      {projects.map((pj) => {
        return <div>
          {/* {pj.name} */}
        </div>
      })}
    </div>
  </>)
}
