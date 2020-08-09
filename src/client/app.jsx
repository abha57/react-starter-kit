import React, { useEffect, useCallback, useState } from 'react';
import { Provider, connect } from 'react-redux';
import store from './store';
import actions from './rootReducer/actions';
import Header from './components/Header';

const App = (props) => {
    const { fetchCuisines, cuisines, setCuisines } = props;
    const [query, setQuery] = useState('');
    useEffect(() => {
        fetchCuisines();
    }, []);
    const onSearch = useCallback((query) => {
        setQuery(query);
    }, []);
    useEffect(() => {
        setCuisines(query);
    }, [query]);
  return (
    <>
      <div className="container">
       <Header onSearch={onSearch} />
       dfsdfdsf
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
    cuisines: state.cuisines
});

const mapDispatchToProps = (dispatch) => ({
    fetchCuisines: () => dispatch(actions.fetchCuisines()),
    setCuisines: (cuisines) => dispatch(actions.setCuisines(cuisines))
});


const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

const StoreApp = () => (
    <Provider store={store}>
        <ConnectedApp />
    </Provider>
)

export default StoreApp;
