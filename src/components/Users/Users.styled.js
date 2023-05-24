import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
  margin-top: 40px;
`;

export const StyledItem = styled.li`
  width: 380px;
  height: 460px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;

export const StyledDiv = styled.div`
  background-image: url('/pictures/backgroundImg.png');
  background-repeat: no-repeat;
  background-position: 36px 28px;
  width: 100%;
  height: 100%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 380px;
    height: 8px;
    left: 0px;
    top: 214px;

    background: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
`;

export const StyledLogo = styled.img`
  position: absolute;
  width: 76px;
  height: 22px;
  left: 20px;
  top: 20px;
`;

export const StyledAvatar = styled.img`
  position: absolute;
  width: 62px;
  height: 62px;
  left: 150px;
  top: 178px;

  border-radius: 50%;
  z-index: 1;

  border: solid #ebd8ff 9px;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const StyledTweets = styled.p`
  position: absolute;
  top: 284px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  height: 24px;
  min-width: 132px;

  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;

  color: #ebd8ff;
`;

export const StyledFollowers = styled.p`
  position: absolute;
  top: 324px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  height: 24px;
  min-width: 214px;

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;

  color: #ebd8ff;
`;

export const StyledFollowButton = styled.button`
  width: 196px;
  height: 50px;
  position: absolute;
  left: 92px;
  top: 374px;
  cursor: pointer;

  background-color: #ebd8ff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  outline: none;
  border: none;

  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #373737;
  transition: transform 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const StyledUnfollowButton = styled.button`
  width: 196px;
  height: 50px;
  position: absolute;
  left: 92px;
  top: 374px;
  cursor: pointer;

  background: #5cd3a8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  outline: none;
  border: none;

  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  color: #373737;
  transition: transform 250ms ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
