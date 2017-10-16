import React from 'react'
import { connect } from 'react-apollo'
import gql from 'graphql-tag'

export class HomeView extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    const author = this.props.data.author
    if (!author) {
      return <h1>Loading</h1>
    }
    return (
      <div key={'author-'+idx}>
        <h1>{author.firstName}'s posts</h1>
        {author.posts && author.posts.map((post, idx) => (
          <li key={idx}>{post.title}</li>
        ))}
      </div>
    )
  }
}

// NOTE: This will be automatically fired when the component is rendered, sending this exact GraphQL query to the backend.
const mapQueriesToProps = ({ ownProps, state }) => {
  return {
    data: {
      query: gql`
        query {
          author(firstName:"Edmond", lastName: "Jones"){
            firstName
            posts {
              title
            }
          }
        }
      `
    }
  }
}

export default connect({
  mapQueriesToProps
})(HomeView)
