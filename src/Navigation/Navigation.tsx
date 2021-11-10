import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PagesEnum } from '../types';
import './Navigation.css';

const { MAIN, RENDER_ERROR, WITHOUT_SENTRY } = PagesEnum;

const Navigation: React.FC = () => {
    const { pathname } = useLocation();

    const isMainPage = pathname === MAIN;
    const isRenderPage = pathname === RENDER_ERROR;
    const isWithoutSentryPage = pathname === WITHOUT_SENTRY;

    const linkClass = 'navigation__link';
    const activeLinkClass = 'navigation__link navigation__link_active';

    return (
        <div className="navigation">
            <Link className={isMainPage ?  activeLinkClass : linkClass} to={MAIN}>
                <span className="navigation__text">Handlers errors</span>
            </Link>
            <Link className={isRenderPage ? activeLinkClass : linkClass} to={RENDER_ERROR}>
                <span className="navigation__text">Render errors</span>
            </Link>
            <Link className={isWithoutSentryPage ? activeLinkClass : linkClass} to={WITHOUT_SENTRY}>
                <span className="navigation__text">Without sentry</span>
            </Link>
        </div>
    );
};

export default Navigation;
