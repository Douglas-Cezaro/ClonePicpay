import styled from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  background: #000000;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  height: 50px;
  padding: 16px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BalanceContainer = styled.View``;

export const BalanceTitle = styled.Text`
  color: rgba(255,255,255,0.8)
  font-size: 14px;
  text-align: center;
`;

export const Balance = styled.Text`
  color: #ffffff;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;
