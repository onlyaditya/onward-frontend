import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Image,
  } from '@chakra-ui/react'

  import logo from "../../assets/allsvgimages/logo.svg"



function NavbarDrawer({onClose,isOpen}) {
  
    return (
      <>
       
        <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} >
          <DrawerOverlay />
          <DrawerContent mt="70px">
            <DrawerHeader borderBottomWidth='1px'>
                <Image src={logo}/>
            </DrawerHeader>
            <DrawerBody>
              
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    )
  }


  export default NavbarDrawer