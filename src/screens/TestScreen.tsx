import React, {useState} from 'react';
import SimpleButton from '../components/SimpleButton';
import {styled} from '../styles/theme';
import {axiosCall} from '../utils/axiosCall';

const StyledSafeAreaView = styled.SafeAreaView`
  align-items: center;
  margin-horizontal: 20px;
`;
const StyledText = styled.Text`
  margin-vertical: 20px;
`;

const TestScreen: React.FC = () => {
  const [data, setData] = useState({age: 0, count: 0, name: 'noname'});

  const callAPI = () => {
    axiosCall()
      .then(response => setData(response))
      .catch(err => console.warn(err));
  };
  return (
    <StyledSafeAreaView>
      <StyledText>{`age: ${data.age} name: ${data.name}`}</StyledText>
      <SimpleButton
        label={'Call API'}
        onPress={callAPI}
        buttonTestID={'simpleButtonTestID'}
      />
    </StyledSafeAreaView>
  );
};

export default TestScreen;
