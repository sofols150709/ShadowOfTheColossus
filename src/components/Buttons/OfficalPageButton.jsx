const Button = ({ id, onClick, children }) => {
  return (
    <button id={id} className="official-page-button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;