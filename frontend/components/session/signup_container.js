import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

const mapDispatchToProps = dispatch => {
  return {
    createNewUser: user => dispatch(createNewUser(user))
  }
}

const mapStateToProps = state => ({
  errors: state.errors.session
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);