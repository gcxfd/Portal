import ActionButton from '../common/ActionButton';
import CloseButton from '../common/CloseButton';
import AppContext from '../../AppContext';
import {ReactComponent as EnvelopeIcon} from '../../images/icons/envelope.svg';

const React = require('react');

export const MagicLinkStyles = `
    .gh-portal-icon-envelope {
        width: 44px;
        margin: 12px 0 10px;
    }

    .gh-portal-inbox-notification {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .gh-portal-inbox-notification p {
        text-align: center;
        margin-bottom: 30px;
    }
`;

export default class MagicLinkPage extends React.Component {
    static contextType = AppContext;

    renderFormHeader() {
        let popupTitle = `登录链接已发送!`;
        let popupDescription = `通常你会在三分钟内收到邮件。记得检查垃圾邮箱!`;

        if (this.context.lastPage === 'signup') {
            popupTitle = `激活邮件已经发送!`;
            popupDescription = `通常你会在三分钟内收到邮件。记得检查垃圾邮箱!`;
        }

        return (
            <section className='gh-portal-inbox-notification'>
                <header className='gh-portal-header'>
                    <EnvelopeIcon className='gh-portal-icon gh-portal-icon-envelope' />
                    <h2 className='gh-portal-main-title'>{popupTitle}</h2>
                </header>
                <p>{popupDescription}</p>
            </section>
        );
    }

    renderLoginMessage() {
        return (
            <>
                <div
                    style={{color: '#1d1d1d', fontWeight: 'bold', cursor: 'pointer'}}
                    onClick={() => this.context.onAction('switchPage', {page: 'signin'})}
                >
                    Back to Log in
                </div>
            </>
        );
    }

    handleClose(e) {
        this.context.onAction('closePopup');
    }

    renderCloseButton() {
        const label = '关闭';
        return (
            <ActionButton
                style={{width: '100%'}}
                onClick={e => this.handleClose(e)}
                brandColor={this.context.brandColor}
                label={label}
            />
        );
    }

    render() {
        return (
            <div className='gh-portal-content'>
                <CloseButton />
                {this.renderFormHeader()}
                {this.renderCloseButton()}
            </div>
        );
    }
}
