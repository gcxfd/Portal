import React from 'react';
import {render, fireEvent} from '../../utils/test-utils';
import MagicLinkPage from './MagicLinkPage';

const setup = (overrides) => {
    const {mockOnActionFn, ...utils} = render(
        <MagicLinkPage />
    );
    const inboxText = utils.getByText(/登录链接已发送/i);
    const closeBtn = utils.queryByRole('button', {name: '关闭'});
    return {
        inboxText,
        closeBtn,
        mockOnActionFn,
        ...utils
    };
};

describe('MagicLinkPage', () => {
    test('renders', () => {
        const {inboxText, closeBtn} = setup();

        expect(inboxText).toBeInTheDocument();
        expect(closeBtn).toBeInTheDocument();
    });

    test('calls on action with close popup', () => {
        const {closeBtn, mockOnActionFn} = setup();

        fireEvent.click(closeBtn);
        expect(mockOnActionFn).toHaveBeenCalledWith('closePopup');
    });
});
