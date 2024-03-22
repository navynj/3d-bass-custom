import { useContext } from 'react';
import { options } from '../constants/options';
import { SelectedContext, initalSelected } from '../context/selected';
import Option from './Option';

const Controls = ({
  set,
  className,
}: {
  set: React.Dispatch<React.SetStateAction<typeof initalSelected>>;
  className: string;
}) => {
  const selected = useContext(SelectedContext);

  const changeOptionHandler = (key: string, value: string) => {
    set((state) => {
      const nextState = { ...state };
      nextState[key] = value;
      return nextState;
    });
  };
  return (
    <div className={className}>
      <ul>
        {options.map((item) => (
          <li key={item.part}>
            <h3>{item.part.toUpperCase()}</h3>
            <ul className="flex-wrap gap-sm">
              {item.colors.map((color, i) => (
                <Option
                  onClick={() => {
                    changeOptionHandler(item.part, color);
                  }}
                  key={i}
                  color={color}
                  base={item.base}
                  selected={selected[item.part] === color}
                />
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Controls;
