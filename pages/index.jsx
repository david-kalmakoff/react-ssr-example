import React from 'react';
import { bindActionCreators } from 'redux';
import { initStore, initialCards, addItem } from '../store';
import withRedux from 'next-redux-wrapper';
import './index.css';
import Card from './Card';

class Index extends React.Component {
    static async getInitialProps ({ store }) {
        store.dispatch(initialCards());
    }

    render () {
        return (
            <div>
                {
                    this.props.cards.map((card) => (
                        <Card key={ card.id } name={ card.name } title={ card.title } />
                    ))
                }
                <img src="/static/logo.png" width="200px" />
                <img src="/static/juice.jpg" width="200px" />
                <img src="/static/bg.jpg" width="200px" />
            </div>
        )
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        initialCards: bindActionCreators(initialCards, dispatch),
        addItem: bindActionCreators(addItem, dispatch),
    }
}

const mapStateToProp = (state) => {
    return {
        cards: state.cards,
    }
}

export default withRedux(initStore, mapStateToProp, mapDispatchToProps)(Index);