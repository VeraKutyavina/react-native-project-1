import React, {useState} from 'react';
import {Button} from "react-native";

const Buttons = () => {
  const [clickCount, setClickCount] = useState(0);
  return (
    <>
      <Button
        title="Click!"
        onPress={() => setClickCount(clickCount + 1)}
        disabled={clickCount >= 3}
      />
      <Button
        title="Reset"
        onPress={() => setClickCount(0)}
      />
    </>
  )
};

export default Buttons;