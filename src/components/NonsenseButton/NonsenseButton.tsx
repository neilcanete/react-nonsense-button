import React from "react";

interface INonsenseButtonProps {
  label: string;
}

export default function NonsenseButton(props: INonsenseButtonProps) {
  const { label } = props;

  return <button>{label}</button>;
}
