import PropTypes from 'prop-types';

const propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

function LinkButton({ onClick, className, children }) {
  return (
    <>
      <a
        onClick={onClick}
        className={`active:scale-95 hover:scale-105 hover:text-primary hover:z-10 transition-all ease-in-out ${className}`}
      >
        {children}
      </a>
    </>
  );
}
LinkButton.propTypes = propTypes;

export default LinkButton;
