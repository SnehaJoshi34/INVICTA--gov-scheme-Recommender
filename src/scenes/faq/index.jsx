import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Who can subscribe this Scheme?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Any unorganized worker in the age group of 18-40 years,  whose job is casual in nature , such as home based workers, street vendors, head loaders, brick kiln, cobblers, rag pickers, domestic workers, washer-men, Rickshaw Pullers, Rural landless labourers, own account workers, agricultural workers, construction workers, beedi workers, handloom workers, leather workers, etc.  with monthly income less than Rs 15,000/-. The worker should not be covered under any statutory social security schemes such as National Pension Scheme (NPS), Employees’ State Insurance Corporation scheme, Employees’ Provident Fund Organization Scheme and is not an income tax payee.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How many years the beneficiary will contribute?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Once the beneficiary joins the scheme at the entry age between 18-40 years, he has to contribute till he attains the age 60 years.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Who are not entitled to join this Scheme?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Under the scheme any worker who is covered under any statutory Social Security Scheme such as NPS, ESIC, EPFO and an income tax payee is not entitled to join the scheme.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Whether I have to give proof of my date of birth and income?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          No separate proof of age or the income has to be given. Self Certification and providing of the Aadhaar number will be the basis for enrollment. However in case of any false declaration, may attract appropriate penalty.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What is the mode of contribution?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Primarily, the mode of contribution is on monthly basis by auto-debit.  However, it will also have provisions of quarterly, half yearly and yearly contribution.  First contribution is to be paid in cash at Common Service Centre.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
