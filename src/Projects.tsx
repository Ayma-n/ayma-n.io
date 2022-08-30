import React, { useEffect, useState } from 'react'
import client from "./config/sanityClient";
import ProjectPost from './ProjectPost';

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    /**
   * Fetches all project posts from Sanity.io,
   * and puts them in the "posts" state variable.
   */
    client.fetch(
      `*[_type == "project"] {
      name,
      slug,
      date,
      brief,
      mainImage {
        url,
        alt
      }
    }`
    ).then(data => setProjects(data))
      .catch(console.error)
  }, [])



  return (<>
    <div>Projects</div>
    <div id="all-projects">
      {projects.map((pj: any) => {
        return <ProjectPost
          key={pj.slug.current}
          name={pj.name}
          date={pj.date}
          brief={pj.brief}>·
        </ProjectPost>
      })}
    </div>
  </>)
}
