import React from 'react'

function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">GitHubFinder</h1>
      <p>A React app to search Github profiles and see profile
         details. 
         This Project is a part of the
         <a href="https://www.oreilly.com/videos/react-front-to/9781838645274/">
            {''}
            React Font To Back
         </a>{''}
         Oreilly course by
         <strong>
            <a href="https://learning.oreilly.com/search/?query=Brad%20Traversy&extended_publisher_data=true&highlight=true&include_assessments=false&include_case_studies=true&include_courses=true&include_playlists=true&include_collections=true&include_notebooks=true&include_cloud_scenarios=true&include_sandboxes=true&include_scenarios=true&is_academic_institution_account=false&source=user&sort=relevance&facet_json=true&json_facets=true&page=0&include_facets=true&include_practice_exams=true"></a>
         </strong>
         .
         </p>
         <p className='text-lg text-gray-400'>
            Version <span className='text-white'>1.0.0</span>
         </p>
         <p className='text-lg text-gray-400'>
            Layout By:
            <a className='text-white' href="">
                Shahzad Ali
            </a>
         </p>
    </div>
  )
}

export default About
