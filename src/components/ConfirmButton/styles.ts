import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
    width: 80px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.shape_dark};
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.shape};
`;