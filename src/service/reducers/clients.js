import { GET_CLIENTS } from '../../actions/defaultActionConstants';


const clients = (state = null, action) => {
  switch (action.type) {

    case GET_CLIENTS:
        return state;

    default:
      return state;
  }

}

export default clients;
