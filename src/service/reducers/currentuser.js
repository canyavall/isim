import { GET_CURRENTUSER, LOGOUT_CURRENTUSER} from '../../actions/defaultActionConstants';

const initialUser = {

};

const currentuser = (state = initialUser, action) => {
  switch (action.type) {

    case GET_CURRENTUSER:
      const newState = { ...state }

      return newState;

    case LOGOUT_CURRENTUSER:
      return {
        "id": null,
        "name": null,
        "surname": null,
        "identityNumber": null,
        "isCompany": null,
        "email": null,
        "language": null,
        "token": null
      };

    default:
      return state;
  }
}

export default currentuser;
