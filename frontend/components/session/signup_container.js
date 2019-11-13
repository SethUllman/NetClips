import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

const mapDispatchToProps = dispatch => {
  return {
    createNewUser: user => dispatch(createNewUser(user))
  }
}

export default connect(null, mapDispatchToProps)(Signup);