const Option = ({
  color,
  base,
  selected,
  onClick,
}: {
  color: string;
  base?: string;
  selected?: boolean;
  onClick: () => void;
}) => {
  return (
    <li
      className={`option ${selected ? 'selected' : ''}`}
      onClick={() => {
        onClick();
      }}
    >
      <div className="color" style={{ backgroundColor: color }} />
      {base && <div className="base" style={{ backgroundColor: base, opacity: 0.5 }} />}
    </li>
  );
};

export default Option;
