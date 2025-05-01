export const Select = ({ children, onValueChange, value }: any) => (
  <select className="w-full p-2 border rounded" value={value} onChange={(e) => onValueChange(e.target.value)}>
    {children}
  </select>
);

export const SelectItem = ({ children, value }: any) => (
  <option value={value}>{children}</option>
);