import React from 'react';
import logo from '../images/Logo.png';
import { Container, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

// Styled Components
const StyledContainer = styled(Container)({
  textAlign: 'center',
  margin: '40px auto',
});

const StyledLogo = styled('img')({
  width: '200px',
  marginBottom: '20px',
});

const StyledSection = styled(Box)({
  marginBottom: '30px',
});

const StyledUl = styled('ul')({
  listStyleType: 'disc',
  paddingRight: '20px',
  textAlign: 'right',
});

const StyledLi = styled('li')({
  fontSize: '1.2rem',
  lineHeight: '1.6',
  marginBottom: '10px',
});

const StyledHeading = styled(Typography)({
  fontSize: '2rem',
  marginBottom: '20px',
});

const StyledSubheading = styled(Typography)({
  fontSize: '1.5rem',
  marginBottom: '15px',
});

const StyledParagraph = styled(Typography)({
  fontSize: '1.2rem',
  lineHeight: '1.6',
  marginBottom: '20px',
});

const About = () => {
  return (
    <StyledContainer dir='rtl'>
      <Box>
        <StyledLogo src={logo} alt="Follow Me Logo" />
        <StyledHeading variant="h4">
          אודות האפליקציה Follow Me
        </StyledHeading>
        <StyledParagraph variant="body1">
          אפליקציית "Follow Me" נועדה לאפשר להורים לעקוב אחר ההסעות של ילדיהם מרגע יציאתם מהבית ועד להגעתם למוסד הלימודים.
          האפליקציה מספקת להורים שקט נפשי ומבטיחה שהילדים הגיעו בשלום למוסד הלימודים.
        </StyledParagraph>
        <StyledSubheading variant="h5">
          יתרונות האפליקציה
        </StyledSubheading>
        <StyledSection>
          <StyledUl>
            <StyledLi>מעקב בזמן אמת: הצגת מיקום ההסעה בזמן אמת וזמן הגעה משוער לתחנת העלייה.</StyledLi>
            <StyledLi>הודעות ועדכונים: שליחת הודעות להורים על זמן הגעה משוער לתחנת העלייה והצגת מסלול ההסעה בזמן אמת.</StyledLi>
            <StyledLi>שקט נפשי להורים: מתן אפשרות להורה להתחבר ולצפות במידע על ילדיהם בכל זמן נתון.</StyledLi>
            <StyledLi>נוחות ובטיחות: מתן אפשרות לנהג לצפות ברשימת הילדים ומסלול ההסעה.</StyledLi>
          </StyledUl>
        </StyledSection>
        <StyledSubheading variant="h5">
          מטרות האפליקציה
        </StyledSubheading>
        <StyledSection>
          <StyledUl>
            <StyledLi>לספק להורים כלי למעקב בזמן אמת אחר ההסעות של ילדיהם.</StyledLi>
            <StyledLi>להבטיח שהילדים מגיעים בשלום למוסד הלימודים.</StyledLi>
            <StyledLi>להפחית את הדאגה של ההורים על ידי מתן מידע ועדכונים בזמן אמת.</StyledLi>
          </StyledUl>
        </StyledSection>
      </Box>
    </StyledContainer>
  );
};

export default About;
