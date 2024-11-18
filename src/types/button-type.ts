export type ButtonProps = {
  text: React.ReactNode;
  width?: string;
  color: string;
  borderColor?: string;
  bgColor?: string;
  onClickHandler: (e?: any) => void;
};
