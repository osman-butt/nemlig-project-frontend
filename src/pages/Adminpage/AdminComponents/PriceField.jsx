import FormInput from '../../../components/FormInput';

export default function PriceField({ price, index, handlePriceOrDateChangeInstance, handleIsCampaignChangeInstance, prices, removePriceField, addPriceField }) {
    return (
      <fieldset key={price.price_id} className="border-4 border-solid black">
        <div className="px-2">
          <FormInput
            label={`Pris: ${index + 1}`}
            type="number"
            placeholder="Skriv pris på varen her"
            name="price"
            value={price.price}
            onChange={(value) => handlePriceOrDateChangeInstance('price', index)(value)}
          />
  
          <div>
            <p>Kampagne</p>
            <input 
              type="checkbox" 
              checked={price.is_campaign} 
              onChange={(event) => handleIsCampaignChangeInstance(index)(event.target.checked)} 
            />
          </div>
          <FormInput
            label="Start dato"
            type="date"
            name="starting_at"
            value={price.starting_at}
            onChange={(value) => handlePriceOrDateChangeInstance('starting_at', index)(value)}
          />
          <FormInput
            label="Slut dato"
            type="date"
            name="ending_at"
            value={price.ending_at}
            onChange={(value) => handlePriceOrDateChangeInstance('ending_at', index)(value)}
          />
          <div className="flex flex-row justify-between font-bold">
            <button type="button" onClick={() => removePriceField(index)} disabled={prices.length <= 1}>Remove Price</button>
            <button type="button" onClick={addPriceField}>Add Price</button>
          </div>
        </div>
      </fieldset>
    );
  }