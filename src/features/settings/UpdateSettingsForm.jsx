 
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import useSettings from './useSettings';
import useUpdateSetting from './useUpdateSetting';

function UpdateSettingsForm() {
  const { settings, isLoading, error } = useSettings();

  if (isLoading) return <Spinner />;
  if (error) return <p>Error loading settings.</p>;
  if (!settings) return null;

  const { minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice } = settings;
 
  const { updateSetting, isUpdating } = useUpdateSetting();
  
  function handelUpdate(e){
    e.preventDefault();
  }
  return (
    <Form >
      <FormRow label="Minimum nights/booking">
        <Input type="number" id="min-nights" defaultValue={minBookingLength} onBlur={(e) => handelUpdate(e, 'minBookingLength')}/>
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input type="number" id="max-nights" defaultValue={maxBookingLength} />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input type="number" id="max-guests" defaultValue={maxGuestsPerBooking} />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input type="number" id="breakfast-price" defaultValue={breakfastPrice} />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
