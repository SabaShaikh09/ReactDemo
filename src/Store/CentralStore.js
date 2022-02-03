import rootReducer from "../Reducers/RootReducer";
import { createStore} from "redux";

const finalStore = createStore(rootReducer);

export default finalStore;