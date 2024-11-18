export type SelectProps = {
  label: string;
  value: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  optionsEnum: { [key: string]: string };
};
