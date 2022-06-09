function Icon({ icon, onClick }) {
  return (
    <i role='button' onClick={onClick} className={`fa ${icon}`} aria-hidden='true'></i>
  );
}

export default Icon;
