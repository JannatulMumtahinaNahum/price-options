import PropTypes from 'prop-types';
import { TiArrowRightOutline } from "react-icons/ti";
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex gap-1 items-center'> <TiArrowRightOutline className='text-green-600'></TiArrowRightOutline>{feature}</p>
        </div>
    );
};



Feature.propTypes = {
    feature: PropTypes.string
}
export default Feature;