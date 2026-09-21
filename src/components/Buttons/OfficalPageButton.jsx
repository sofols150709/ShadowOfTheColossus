const Button = ({ id, onClick, children, className }) => {
  return (
    <button id={id} className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;