import FormInput from "../../../../components/forms/FormInput";

export default function ImageFields({
  images,
  handleImageChangeInstance,
  removeImageField,
  addImageField,
}) {
  return images.map((image, index) => (
    <div key={index}>
      <FormInput
        label={`Billede ${index + 1}:`}
        type="text"
        placeholder="Indsæt link til billede her"
        value={image.image_url}
        onChange={value => handleImageChangeInstance("image_url", index)(value)}
      />
      <div className="flex flex-row justify-between font-bold">
        <button
          type="button"
          onClick={() => removeImageField(index)}
          disabled={images.length <= 1}
        >
          Fjern billede
        </button>
        <button type="button" onClick={addImageField}>
          Tilføj billede
        </button>
      </div>
    </div>
  ));
}
