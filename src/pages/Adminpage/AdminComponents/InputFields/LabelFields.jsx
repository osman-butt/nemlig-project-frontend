import  SelectField from "../InputFields/SelectFields.jsx";

export default function LabelFields({ labels, labelData, handleSelectChangeInstance, removeLabelField, addLabelField }) {
  return (
    <>
      {labels.map((_, index) => (
        <div key={index}>
          <SelectField
            name={`labels`}
            value={labels[index]|| ""}
            onChange={(event) => handleSelectChangeInstance(index)(event.target.value)}
            options={labelData.map((label) => ({ id: label.label_id, name: label.label_name }))}
            placeholder="Vælg label"
          />
          <div className="flex flex-row justify-between font-bold">
            <button type="button" onClick={() => removeLabelField(index)}>Fjern label</button>
            <button type="button" onClick={() => addLabelField()}>Tilføj label</button>
          </div>
        </div>
      ))}
    </>
  );
}