import {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {isAuthenticated} from '../context/service';
import {LogUserOutAction} from '../context/actions';
import {useNavigation} from '@react-navigation/native';

function ProtectedScreensContainer(props: any) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  useEffect(() => {
    async function checkForAuthentication() {
      if (!isAuthenticated) {
        await LogUserOutAction()(dispatch);
        navigation.navigate('SignIn');
        return;
      }
    }
    checkForAuthentication();
  }, [props.isAuthenticated, props.checkForAuthentication]);
  useEffect(() => {});
  return <>{props.children}</>;
}
const mapStateToProps = (state: any) => {
  return {
    isAuthenticated: isAuthenticated(state.authState),
  };
};
export default connect(mapStateToProps)(ProtectedScreensContainer);
