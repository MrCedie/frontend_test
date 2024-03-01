import Select from "react-select";

interface ControlsProps {
  onChangeSortBy: (value: string) => void;
  onChangeSortDirection: (value: string) => void;
}

const Controls: React.FC<ControlsProps> = ({
  onChangeSortBy,
  onChangeSortDirection,
}) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select
          options={fieldOptions}
          inputId="sort-field"
          className="input"
          onChange={(value) => (value ? onChangeSortBy(value.value) : null)}
        />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={(value) =>
            value ? onChangeSortDirection(value.value) : null
          }
        />
      </div>
    </div>
  );
};

export default Controls;
