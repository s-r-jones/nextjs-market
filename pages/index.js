import Layout from '../components/Layout'
import Typography from '@material-ui/core/Typography';

export default class Index extends React.Component {
constructor() {
  super()


  this.state = {
    name: ''
  };

}

async componentDidMount() {
  this.setState({
    name: 'Sam'
  })
}

  render() {
    return <Layout>
      
      <Typography component="p">
          Hello {`${this.state.name}`}
      </Typography>
    </Layout>
  }
}

