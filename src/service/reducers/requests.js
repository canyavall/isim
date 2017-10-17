import { GET_REQUESTS } from '../../actions/defaultActionConstants';


const requests = (state = null, action) => {
  switch (action.type) {

    case GET_REQUESTS:
        return state;

    default:
      return state;
  }

};

export default requests;
