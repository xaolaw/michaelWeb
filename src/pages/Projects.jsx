import { useEffect, useState } from 'react';

function Projects() {
  const [page, setPage] = useState(null);
  const query = `
{
  pageCollection {
    items {
      name
      image {
        url
      }
      slug
      short name
      description
    }
  }
}`;
  useEffect(() => {
    window
      .fetch(`https://graphql.contentful.com/content/v1/spaces/xbarv21go206/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authenticate the request
          Authorization: 'Bearer D8MNKk0S2_S_vrTXVLmuSpdUu2VpL6tjLgPUD8b2FRE',
        },
        // send the GraphQL query
        body: JSON.stringify({ query }),
      })
      .then((response) => response.json())
      .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }

        // rerender the entire component with new data
        setPage(data.pageCollection.items[0]);
      });
  }, []);
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={page.image.url} className="App-logo" alt="logo" />
          <p>{page.name}</p>
        </header>
      </div>
    </>
  );
}
export default Projects;
