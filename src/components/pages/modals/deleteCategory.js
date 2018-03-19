import React from 'react';
import PropTypes from 'proptypes';
import { Button, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class DeleteCategory extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categoryID: props.category.id
        }
    }
    render(){
        return (
            <Modal trigger={<Button><i className="fas fa-trash-alt"/></Button>}>
                <Modal.Header className="modalheader">are you sure you want to delete the category {this.props.category.category_name} ..?</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <div className="cta">
                            <button>Yes</button>
                            <button>No</button>
                        </div>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }

}

DeleteCategory.propTypes = {
    category: PropTypes.instanceOf(Object).isRequired
}

export default DeleteCategory;
