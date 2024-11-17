import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

export const Input = ({
  label = "",
  options = [],
  defaultValue = "",
  onChangeCallback = () => {},
}) => {
  const [value, setValue] = useState(defaultValue);
  return (
    <div className="flex flex-col my-1">
      <label className="text-sm mb-1 font-semibold">{label}:</label>
      {options.length > 0 ? (
        <div className="relative">
          <ChevronDownIcon className="absolute right-2 pointer-events-none top-1" />
          <select
            className="px-2 py-1 text-sm rounded border border-black appearance-none w-full"
            value={value}
            onChange={(e) => {
              setValue(e);
              onChangeCallback(e);
            }}
          >
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <input
          className="px-2 py-1 rounded border text-sm border-black"
          type="text"
          value={value}
          onChange={(e) => {
            const response = e.target.value.trim();
            onChangeCallback(response);
            setValue(response);
          }}
        />
      )}
    </div>
  );
};
