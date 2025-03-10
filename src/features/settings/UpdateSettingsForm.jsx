import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import useSettings from './useSettings';
import useUpdateSetting from '../settings/useUpdateSetting';

function UpdateSettingsForm() {
  const { settings, isLoading, error } = useSettings();
  const { updateSetting , isUpdating } = useUpdateSetting(); // هوک را قبل از هر شرط فراخوانی کنید

  if (isLoading) return <Spinner />;
  if (error) return <p>Error loading settings.</p>;
  if (!settings) return null;

  const { minBookingLength, maxBookingLength, maxGuestsPerBooking, breakfastPrice } = settings;

  function handelUpdate(e, field) {
    e.preventDefault();
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [field]: value });
  }

  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          defaultValue={minBookingLength}
          onBlur={(e) => handelUpdate(e, 'minBookingLength')}
        disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          defaultValue={maxBookingLength}
          onBlur={(e) => handelUpdate(e, 'maxBookingLength')}
        disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          defaultValue={maxGuestsPerBooking}
          onBlur={(e) => handelUpdate(e, 'maxGuestsPerBooking')}
        disabled={isUpdating}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          defaultValue={breakfastPrice}
          onBlur={(e) => handelUpdate(e, 'breakfastPrice')}
        disabled={isUpdating}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
