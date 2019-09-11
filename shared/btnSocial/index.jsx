import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import style from './style';

class BtnSocial extends PureComponent {
    constructor(props) {
        super(props);
        this.shareFB = this.shareFB.bind(this);
        this.shareTW = this.shareTW.bind(this);
    }

    componentDidMount() {
        //social();

        window.fbAsyncInit = function () {
            FB.init({
                appId: '489210501129201',
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v2.12',
            });
        };

        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');

    }

    shareFB(ev) {
        ev.preventDefault();
        let element = ev.target;

        if (element.nodeName === "I") {
            element = element.parentElement;
        }

        let href = element.getAttribute("href");

        FB.ui({
            method: 'share',
            mobile_iframe: true,
            href: href,
        }, function (response) {
        });

    }

    shareTW(ev) {
        ev.preventDefault();
        let that = this;
        let element = ev.target;
        let href = '';

        if (element.nodeName === "I") {
            element = ev.target.parentElement;
        }

        href = element.getAttribute("href");

        let PopupCenter = function (url, title, w, h) {
            // Fixes dual-screen position                         Most browsers      Firefox
            let dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
            let dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top;

            let width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
            let height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

            let left = ((width / 2) - (w / 2)) + dualScreenLeft;
            let top = ((height / 2) - (h / 2)) + dualScreenTop;
            let newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

            // Puts focus on the newWindow
            if (window.focus) {
                newWindow.focus();
            }
        };

        PopupCenter(href, 'Twitter', '580', '290');
    }

    render() {
        const {classes, style, fbSocial, twSocial, urlShare, textSocial, titleSocial} = this.props;

        const criticalFbFormat1 = {
            backgroundColor: "#3B5996",
            borderRadius: "6px",
            color: "#FFFFFF",
            display: "block",
            padding: "0.5rem 3rem",
            paddingRight:"75px",
        },
        criticalFbFormat2 = {
            backgroundColor: "#EFEFF0",
            color: "#23599b",
            display: "block",
            padding: ".2rem .45rem",
        },
        criticalFbFormat3 = {
            backgroundColor: "#B3B3B3",
            borderRadius: '50%',
            color: "#FFFFFF",
            display: "block",
            padding: ".20rem .65rem",
        },
        criticalTwFormat1 = {
            backgroundColor: "#4299fD",
            borderRadius: "6px",
            color: "#FFFFFF",
            display: "block",
            padding: "0.5rem 3rem",
            paddingRight:"75px",
        },
        criticalTwFormat2 = {
            backgroundColor: "#EFEFF0",
            color: "#00b8db",
            display: "block",
            padding: ".2rem .45rem"
        },
        criticalTwFormat3 = {
            backgroundColor: "#B3B3B3",
            borderRadius: '50%',
            color: "#FFFFFF",
            display: "block",
            padding: ".20rem .50rem",
        };

        return <div className={style.SocialContainer}>
            {fbSocial ? (
                <a className={style === 'format1' ? style.FbSocialFormat1
                    : style === 'format2' ? style.FbSocialFormat2
                    : style.FbSocialFormat3}
                   style={style === 'format1' ? criticalFbFormat1
                    : style === 'format2' ? criticalFbFormat2
                    : criticalFbFormat3}
                   aria-label={`compartiendo la nota a las redes sociales`}
                   href={urlShare ? urlShare : "https://www.larepublica.pe"} onClick={this.shareFB}>
                    <i className={`fa fa-facebook`} aria-hidden="true"/> {textSocial ? textSocial : ''}
                </a>
            ) : null}

        </div>

    }
}

BtnSocial.propTypes = {
    icon: PropTypes.string,
    classname: PropTypes.string
};

export default BtnSocial;