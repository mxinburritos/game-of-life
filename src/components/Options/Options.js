import React, { useState } from 'react';
import { Menu, Button, Modal, Header, Icon } from 'semantic-ui-react';
import Grid from '../Grid/Grid';

const Options = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleClear = () => {
    this.setState({ modalOpen: false });
    this.setState({ grid });
  };

  return (
    <Menu>
      <Modal
        basic
        onClose={setModalOpen(false)}
        onOpen={setModalOpen(true)}
        open={modalOpen}
        size='small'
        trigger={<Button>Clear Cells</Button>}
        centered={true}
        className='modal'
      >
        <Header icon>
          <Icon name='trash' />
          Clear All Cells?
        </Header>
        <Modal.Content>
          <p>Are you sure you want to clear all cells in the grid?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={setModalOpen(false)}>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' inverted onClick={setModalOpen(false)}>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    </Menu>
  );
};

export default Menu;
