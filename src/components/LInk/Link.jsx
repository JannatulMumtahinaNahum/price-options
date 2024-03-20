import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
        <li className="mr-10 p-1 rounded-md hover:bg-purple-200">
        <a href={route.path}></a>{route.name}</li>
    );
};

Link.propTypes = {
    route: PropTypes.object
}

export default Link;