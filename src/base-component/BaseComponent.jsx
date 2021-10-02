import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { getAuthenticatedUser } from '@edx/frontend-platform/auth';
import { getConfig } from '@edx/frontend-platform';
import {
  ExtraSmall, Small, Medium, Large, ExtraLarge, ExtraExtraLarge,
} from '@edx/paragon';
import CookiePolicyBanner from '@edx/frontend-component-cookie-policy-banner';
import { getLocale } from '@edx/frontend-platform/i18n';

import LargeLayout from './LargeLayout';
import MediumLayout from './MediumLayout';
import SmallLayout from './SmallLayout';

import AuthExtraLargeLayout from './AuthExtraLargeLayout';
import AuthMediumLayout from './AuthMediumLayout';
import AuthSmallLayout from './AuthSmallLayout';
import DiscountExperimentBanner from './DiscountBanner';

import bgImage from '../assets/bkpg.png';
import logoImage from '../assets/logo.png';

const BaseComponent = ({ children, isRegistrationPage, showWelcomeBanner }) => {
  const authenticatedUser = showWelcomeBanner ? getAuthenticatedUser() : null;
  const [optimizelyExperimentName, setOptimizelyExperimentName] = useState('');

  useEffect(() => {
    const { experimentName } = window;

    if (experimentName) {
      setOptimizelyExperimentName(experimentName);
    }
  });

  return (
    <>
      {/* {isRegistrationPage && optimizelyExperimentName === 'variation2' ? <DiscountExperimentBanner /> : null}
      <CookiePolicyBanner languageCode={getLocale()} />
      <ExtraLarge>
        <div className="col-md-12 extra-large-screen-top-stripe" />
      </ExtraLarge>
      <ExtraExtraLarge>
        <div className="col-md-12 extra-large-screen-top-stripe" />
      </ExtraExtraLarge> */}

      <div className={classNames('layout justify-content-center align-items-center min-vh-100 min-vw-100', { authenticated: authenticatedUser })} style={{ backgroundImage: "url(" + bgImage + ")", backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
        {/* <ExtraSmall>
          <div className="col-md-12 small-screen-top-stripe" />
          {authenticatedUser ? <AuthSmallLayout variant="xs" username={authenticatedUser.username} /> : (
            <SmallLayout experimentName={optimizelyExperimentName} isRegistrationPage={isRegistrationPage} />
          )}
        </ExtraSmall>
        <Small>
          <div className="col-md-12 small-screen-top-stripe" />
          {authenticatedUser ? <AuthSmallLayout username={authenticatedUser.username} /> : (
            <SmallLayout experimentName={optimizelyExperimentName} isRegistrationPage={isRegistrationPage} />
          )}
        </Small>
        <Medium>
          <div className="w-100 medium-screen-top-stripe" />
          {authenticatedUser ? <AuthMediumLayout username={authenticatedUser.username} /> : (
            <MediumLayout experimentName={optimizelyExperimentName} isRegistrationPage={isRegistrationPage} />
          )}
        </Medium>
        <Large>
          <div className="w-100 large-screen-top-stripe" />
          {authenticatedUser ? <AuthMediumLayout username={authenticatedUser.username} /> : (
            <MediumLayout experimentName={optimizelyExperimentName} isRegistrationPage={isRegistrationPage} />
          )}
        </Large>
        <ExtraLarge>
          {authenticatedUser ? <AuthExtraLargeLayout username={authenticatedUser.username} /> : (
            <LargeLayout experimentName={optimizelyExperimentName} isRegistrationPage={isRegistrationPage} />
          )}
        </ExtraLarge>
        <ExtraExtraLarge>
          {authenticatedUser ? <AuthExtraLargeLayout variant="xxl" username={authenticatedUser.username} /> : (
            <LargeLayout experimentName={optimizelyExperimentName} isRegistrationPage={isRegistrationPage} />
          )}
        </ExtraExtraLarge> */}

        <div className={classNames('content logo-content d-flex flex-column align-items-center p-login m-3 bg-white', { 'align-items-center mt-0': authenticatedUser })}>
          <a href={getConfig().LMS_BASE_URL}>
            <img src={logoImage} alt="Logo" className="size-100" />
          </a>
          {children}
        </div>
      </div>
    </>
  );
};

BaseComponent.defaultProps = {
  isRegistrationPage: false,
  showWelcomeBanner: false,
};

BaseComponent.propTypes = {
  children: PropTypes.node.isRequired,
  isRegistrationPage: PropTypes.bool,
  showWelcomeBanner: PropTypes.bool,
};

export default BaseComponent;
