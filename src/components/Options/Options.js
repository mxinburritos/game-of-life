import React, { useState } from 'react';
import { Menu, Button, Modal, Header, Icon } from 'semantic-ui-react';

import Node from '../Grid/Node/Node';
import Grid from '../Grid/Grid'

const Options = ({initializeGrid, handleGridChange, grid}) => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleClear = () => {
        setModalOpen(false);
        let newGrid = initializeGrid(grid.length, grid[0].length);
        handleGridChange(newGrid);
    };

    return (
        <Menu>
            <Modal
                basic
                onClose={() => setModalOpen(false) }
                onOpen={() => setModalOpen(true) }
                open={modalOpen}
                size='small'
                trigger={<Button>Clear cells</Button>}
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
                    <Button
                        basic
                        color='red'
                        inverted
                        onClick={() => { setModalOpen(false) }}
                    >
                        <Icon name='remove' /> No
                    </Button>
                    <Button
                        basic
                        color='green'
                        inverted
                        onClick={() => { handleClear(); setModalOpen(false) }}
                    >
                        <Icon name='checkmark' /> Yes
                    </Button>
                </Modal.Actions>
            </Modal>
        </Menu>
    );
};

export default Options;
