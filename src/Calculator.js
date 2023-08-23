// src/components/Calculator.js
import React, { useState } from 'react';
import { Box, Button, Grid, Input, Text } from '@chakra-ui/react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setOutput(eval(input).toString());
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setOutput('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <Box p={4} ml='80' mr='120' w='57%'>
      <Text fontSize="4xl" mb={4} h='20vh' >
         CALCULATOR
      </Text>
      <Input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="0"
        mb={4}
      />
      <Grid templateColumns="repeat(4, 1fr)" gap={2}>
        {['7', '8', '9', '/'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </Button>
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </Button>
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </Button>
        ))}
        {['0', '=', 'C', '+'].map((value) => (
          <Button
            key={value}
            onClick={() => handleButtonClick(value)}
            gridColumn={value === '=' ? 'span 2' : ''}
          >
            {value}
          </Button>
        ))}
      </Grid>
      <Text fontSize="2xl" mt={4} >
        RESULT: {output}
      </Text>
    </Box>
  );
};

export default Calculator;
