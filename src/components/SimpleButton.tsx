import React from 'react';
import styled from 'styled-components/native';

type ButtonProps = {
  label: string;
  onPress: () => void;
  buttonTestID?: string;
};

const ButtonContainer = styled.TouchableOpacity`
  height: ${56}px;
  width: 100%;
  margin-top: 17px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.background.dark};
`;

const ButtonText = styled.Text`
font-family: "RobotoMono-Medium"
font-size:16px
color:
 ${props => props.theme.colors.text.lightGrey}
line-height:21px
`;

const SimpleButton: React.FC<ButtonProps> = ({
  label,
  onPress,
  buttonTestID,
}) => {
  return (
    <ButtonContainer onPress={onPress} testID={buttonTestID}>
      <ButtonText>{label}</ButtonText>
    </ButtonContainer>
  );
};

export default SimpleButton;
