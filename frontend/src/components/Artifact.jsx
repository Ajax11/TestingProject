import { Label, Input, FormGroup } from 'reactstrap';

function InputToFill({ textLabelInput, textInputType, textInputValue }) {
  return (
    <>
      <form>
        <FormGroup>
          <Label>{textLabelInput}:</Label>
          <Input type={textInputType} value={textInputValue} readOnly />
        </FormGroup>
      </form>
    </>
  );
}

export default InputToFill;
