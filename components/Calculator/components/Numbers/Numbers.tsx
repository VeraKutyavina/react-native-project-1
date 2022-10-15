import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import Card from '../Card';

enum Actions {
  addition = 'addition',
  subtraction = 'subtraction',
  multiplication = 'multiplication',
  division = 'division',
  reset = 'reset',
  clear = 'clear',
  end = 'end',
}

const Numbers = () => {
  const [result, setResult] = useState<number>(0);
  const [currentAction, setCurrentAction] = useState<`${Actions}` | null>(null)
  const [currentInput, setCurrentInput] = useState<string>('');

  const onNumberClick = (num: string) => {
    setCurrentInput(currentInput + num);
  }

  const onActionClick = (action: `${Actions}`) => {
    if(!currentAction) {
      setCurrentAction(action);
      setResult(currentInput ? Number.parseInt(currentInput) : 0);
      setCurrentInput('');
      return;
    }

    if (action === 'reset') {
      setCurrentInput('');
      setCurrentAction(null);
      setResult(0);
      return;
    }

    if (action && !currentInput) return;

    switch (currentAction) {
      case 'addition':
        setResult(result + Number.parseInt(currentInput));
        break;
      case 'subtraction':
        setResult(result - Number.parseInt(currentInput));
        break;
      case 'multiplication':
        setResult(result * Number.parseInt(currentInput));
        break;
      case 'division':
        setResult(result / Number.parseInt(currentInput));
        break;
      case 'clear':
        setCurrentInput('');
        break;
      default:
    }
    if (action === 'end') {
      setCurrentAction(null);
      setCurrentInput('');
      return ;
    };
    setCurrentAction(action);
    setCurrentInput('');
  };

  return (
    <>
      <Text style={styles.currentInput}> {currentInput} </Text>
      <View>
        <View style={styles.row}>
          <Card text="1" onClick={onNumberClick} />
          <Card text="2" onClick={onNumberClick} />
          <Card text="3" onClick={onNumberClick} />
          <Card text="+" onClick={() => onActionClick('addition')} />
        </View>
        <View style={styles.row}>
          <Card text="4" onClick={onNumberClick} />
          <Card text="5" onClick={onNumberClick} />
          <Card text="6" onClick={onNumberClick} />
          <Card text="-" onClick={() => onActionClick('subtraction')} />
        </View>
        <View style={styles.row}>
          <Card text="7" onClick={onNumberClick} />
          <Card text="8" onClick={onNumberClick} />
          <Card text="9" onClick={onNumberClick} />
          <Card text="*" onClick={() => onActionClick('multiplication')} />
        </View>
        <View style={styles.row}>
          <Card text="0" onClick={onNumberClick} />
          <Card text="<-" onClick={() => onActionClick('clear')} />
          <Card text="C" onClick={() => onActionClick('reset')} />
          <Card text="%" onClick={() => onActionClick('division')} />
        </View>
        <View style={styles.row}>
          <Card text="=" onClick={() => onActionClick('end')} />
        </View>
      </View>
      <Text style={styles.result}> Result: {result}</Text>
    </>
  )
};

export default Numbers;