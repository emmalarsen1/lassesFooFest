import { Radio } from "@nextui-org/react";

export default function SpotForm(props) {
  return (
    <Radio.Group
      aria-label="spots"
      orientation="vertical"
      onChange={(e) => {
        props.selection(e);
      }}
    >
      {props.data?.map((spot, i) => {
        return (
          <Radio size="sm" key={i} value={spot.area} isDisabled={spot.available == 0}>
            {spot.area} - Available: {spot.available}
          </Radio>
        );
      })}
    </Radio.Group>
  );
}
