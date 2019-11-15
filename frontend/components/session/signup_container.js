import { connect } from 'react-redux';
import { createNewUser, login } from '../../actions/session';
import Signup from './signup';

const mapDispatchToProps = dispatch => {
  return {
    createNewUser: user => dispatch(createNewUser(user)),
    login: user => dispatch(login(user))
  }
}

const mapStateToProps = state => ({
  errors: state.errors.session
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);