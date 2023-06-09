import {
  StyledTitle,
  StyledText,
  TextContainer,
} from "../styled-components/Title.Styled";

export default function Title() {
  return (
    <TextContainer>
      <StyledTitle>Learn to code by watching others</StyledTitle>
      <StyledText>
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </StyledText>
    </TextContainer>
  );
}
