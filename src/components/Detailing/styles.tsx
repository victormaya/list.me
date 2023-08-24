import styled from "styled-components";
import theme from "styles/theme";

export const DetailingContainer = styled.div`
  margin: 1rem;
  width: 100%;
  height: 648px;
  border-radius: 8px;
  background: rgba(38, 38, 38, 0.5);
  position: absolute;
  width: 94vw;
  top: 404px;
  display: flex;
  overflow: auto;
`;
export const LeftSide = styled.div`
  width: 34%;
  border-right: 1px solid ${theme.colors.grayDark};
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const MiniThumb = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 80px;
  height: 80px;
  background: ${theme.colors.grayDark};
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RightSide = styled.div`
  padding: 50px 30px 30px 30px;
  width: 66%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const TitleBrandMegaphone = styled.div`
  display: flex;
  gap: 40px;
`;
export const ItemTitle = styled.h1`
  font-size: ${theme.fontSizes.s24};
  font-weight: 600;
  color: ${theme.colors.white};
`;
export const ItemBrand = styled.h2`
  font-size: ${theme.fontSizes.s14};
  font-weight: 500;
  color: ${theme.colors.white};
  span {
    color: ${theme.colors.gray};
  }
`;
export const DetailsTitle = styled.p`
  font-size: ${theme.fontSizes.s16};
  color: ${theme.colors.white};
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 25px;
`;
export const Details = styled.ul`
  li {
    font-weight: 200;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.s14};
    margin-bottom: 15px;
  }
`;
export const ContentDown = styled.div`
  margin-top: auto;
  display: flex;
  gap: 15px;
  width: 100%;
`;
export const BigButton = styled.div`
  height: 48px;
  background: ${theme.colors.yellow};
  color: ${theme.colors.dark};
  cursor: pointer;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: 1px solid ${theme.colors.yellow};
  :hover {
    background: ${theme.colors.dark};
    color: ${theme.colors.yellow};
  }
`;
export const Megaphone = styled.div`
  margin-left: auto;
`;
