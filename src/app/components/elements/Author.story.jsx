import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import rootReducer from 'app/redux/RootReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Author from './Author';
import { Center } from './Tooltip.story';
import {IntlProvider} from 'react-intl';


const store = createStore(rootReducer);

storiesOf('Elements', module)
    .addDecorator(withKnobs)
    .addDecorator(getStory => (
        <Provider
            store={store}
        >
            {getStory()}
        </Provider>
    ))
    .add('Author', () => (
        <IntlProvider locale="en">
            <Center>
                <Author
                    author={'maitland'}
                />
            </Center>
        </IntlProvider>
    ));