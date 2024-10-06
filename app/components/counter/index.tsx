import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './../../actions';

const Counter = () => {

  const count = useSelector((state:any) => state.count);
  
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;