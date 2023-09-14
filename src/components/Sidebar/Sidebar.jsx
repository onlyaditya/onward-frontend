import { useState } from "react";
import styles from "./Sidebar.module.css";

import hamburger from "../../assets/allsvgimages/hamburger.svg";
import home from "../../assets/allsvgimages/home.svg";
import course from "../../assets/allsvgimages/course.svg";
import selflearning from "../../assets/allsvgimages/selflearning.svg";
import activities from "../../assets/allsvgimages/activities.svg";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Badge,
  Text,Flex
} from "@chakra-ui/react";

const arr = [
  { name: "Home", path: "/" },
  { name: "Home", path: "/courses" },
  { name: "Home", path: "/learn" },
  { name: "Home", path: "/activities" },
];

function Sidebar() {
  const [show, setShow] = useState(false);
  return (
    <div className={styles.forPhone}>
      <div className={show ? styles.sidebar1 : styles.sidebar}>
        <ul>
          <li className={styles.main} onClick={() => setShow(!show)}>
            <img  src={hamburger} alt="" />
          </li>
          <li>
            <img src={home} alt="" />
            { <p>Home</p>}
          </li>
          <li>
            <img src={course} alt="" />
            { <p>Courses</p>}
          </li>
          <li>
            <img src={selflearning} alt="" />
            { <p style={{height:"10px"}}>Self Learning</p>}
          </li>
          <li className={styles.activities}>
            <img src={activities} alt="" />
            {<Accordion allowToggle >
              <AccordionItem border="0px">
                
                  <AccordionButton 
                  _hover={{ bg: 'none' }}
                  border="0px"
                  >
                    <Flex>
                    <Text fontSize="16px" fontWeight="600" color="var(--primary-red-900, #0A0103);">Activities</Text>
                    <Badge
                      rounded="full"
                      px="2"
                      fontSize="0.8em"
                      colorScheme="red"
                    >
                      New
                    </Badge>
                    </Flex>
                    <AccordionIcon />
                  </AccordionButton>
                
                <AccordionPanel className={styles.subnav}>
                MasterClass
                </AccordionPanel>
                <AccordionPanel className={styles.subnav}>
                  Events
                </AccordionPanel>
                <AccordionPanel className={styles.subnav}>
                  Contests
                </AccordionPanel>
              </AccordionItem>
            </Accordion>}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
