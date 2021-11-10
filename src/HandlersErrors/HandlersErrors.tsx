import React, { useEffect, useState } from 'react';
import './HandlersErrors.css';
import * as Sentry from '@sentry/react';

const HandlersErrors: React.FC = () => {
    const [isErrorHandled, setErrorHandle] = useState(false);

    const buttonClass = isErrorHandled ? 'handlers-errors__button handlers-errors__button_disabled' : 'handlers-errors__button';

    useEffect(() => {
        if (!isErrorHandled) {
            return;
        }

        const timeout = setTimeout(() => setErrorHandle(false), 3000);

        return (): void => clearTimeout(timeout);
    }, [isErrorHandled]);

    const handleErrorThrow = (): void => {
        throw Error('error');
    };

    const hiddenSentryHandler = (): void => {
        let someObject = undefined as any;

        try {
            someObject.value = 20;
        } catch(ex) {
            Sentry.captureException(ex);
            setErrorHandle(true);
        }
    };

    return (
        <div className="handlers-errors">
            <button className="handlers-errors__button" onClick={handleErrorThrow}>Error throw</button>
            <button className={buttonClass} onClick={hiddenSentryHandler}>{isErrorHandled ? 'Error handled' : 'Hidden handler'}</button>
        </div>
    );
};

export default HandlersErrors;
