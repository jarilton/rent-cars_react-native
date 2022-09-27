import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.header};
`;
