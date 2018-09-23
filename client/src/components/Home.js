import React from 'react';
import axios from 'axios';
import { Feed, Icon, Image, Card, Container } from 'semantic-ui-react';

class Home extends React.Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('/api/posts')
    .then(res => {
      this.setState({ posts: res.data })
    })
  }

  feed = () => (
    this.state.posts.map( p => (
    <Container>
      <Card centered raised fluid>
        <Feed.Event>
          <Feed.Label>
            <Image src={ p.avatar } size='mini' circular />
          </Feed.Label>
          <Feed.Content>
            <Feed.Summary as='h4'>
            <a>{ p.first_name } { p.last_name }</a> posted on their page
            </Feed.Summary>
            <Feed.Extra text>
              { p.content }
            </Feed.Extra>
            <Feed.Meta>
              <Feed.Like>
                <Icon name='like' />
                { Math.floor((Math.random() * 100) + 1) } Likes
              </Feed.Like>
            </Feed.Meta>
          </Feed.Content>
        </Feed.Event>
      </Card>
      <br />
    </Container>
    ))
  )

  render() {
    return(
      <div>
        {this.feed()}
      </div>
    )
  }
}

export default Home;
