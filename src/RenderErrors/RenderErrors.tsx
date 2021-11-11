import React, { useEffect, useState } from 'react';
import './RenderErrors.css';

const SECONDS_BEFORE_ERROR = 3;

interface ITimerState {
    seconds: number;
};

interface IFormState {
    name: string,
    surname: string,
};

enum InputsNamesEnum {
    NAME = 'name',
    SURNAME = 'surname',
};

const { NAME, SURNAME } = InputsNamesEnum;

const RenderErrors: React.FC = () => {
    const [timer, setTimer] = useState<ITimerState>({ seconds: 0 });
    const [formState, setFormState] = useState<IFormState>({ name: '', surname: '' });

    let interval: NodeJS.Timeout | undefined = undefined;

    useEffect(() => {
        return () => interval && clearInterval(interval);
    }, [interval]);

    const handleSetTimer = (): void => {
        setTimer(({ seconds: currentSeconds }) => {
            const isErrorTime = currentSeconds > SECONDS_BEFORE_ERROR;

            return isErrorTime ? undefined as unknown as ITimerState : { ...timer, seconds: currentSeconds + 1 }
        });
    };

    const handleTimerStart = (): void => {
        interval = setInterval(() => handleSetTimer(), 1000);
    };

    const handleInputChange = ({ target: { name: inputName, value } }: React.ChangeEvent<HTMLInputElement>): void => {
        const isNameChange = inputName === NAME;

        setFormState(({ name: prevName, surname: prevSurname }) => ({
            name: isNameChange ? value : prevName,
            surname: !isNameChange ? value : prevSurname,
        }));
    };

    const handleFormSubmit = (): void => setFormState(undefined as unknown as IFormState);

    return (
        <div className="render-errors">
            <div className="render-errors__tile">
                <h3>Error while using timer</h3>
                {`Прошло времени: ${timer.seconds} сек.`}
                <button className="render-errors__button" onClick={handleTimerStart}>Start timer</button>
            </div>
            <div className="render-errors__tile">
                <h3>Error on form submit</h3>
                <form>
                    <input
                        className="render-errors__input"
                        name={NAME}
                        placeholder="Имя"
                        value={formState.name}
                        onChange={handleInputChange}
                    />
                    <input
                        className="render-errors__input"
                        name={SURNAME}
                        placeholder="Фамилия"
                        value={formState.surname}
                        onChange={handleInputChange}
                    />
                </form>
                <button className="render-errors__button" onClick={handleFormSubmit}>Submit</button>
            </div>
        </div>
    );
};

export default RenderErrors;
