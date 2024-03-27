import './Online.css';
const Online = ({state}) => {
  return (
    <div className='online-container'>
        <div className='onlineIndicator'></div> 
        <p>{state}</p>
    </div>

  );
};
export default Online;
