import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const{name , price, features} = option;
    return (
        <div className='bg-blue-400 rounded-xl flex flex-col p-3 text-white'>
             <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h4 className='text-3xl text-center my-8'>{name}</h4>
            <div className='pl-6 flex-grow'>
            {
                features.map((feature , idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            </div>
            <button className='btn mt-12 font-bold  bg-purple-500 text-white w-full hover:bg-black'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;