import React from 'react';
import { Spinner, SpinnerSize, ISpinnerStyles, useTheme } from '@fluentui/react';
import styles from './Spinner.module.css';

interface SpinnerComponentProps {
    loading: boolean;
    label?: string; // Label is optional
}

const SpinnerComponent: React.FC<SpinnerComponentProps> = ({ loading, label }) => {
    const theme = useTheme();

    const spinnerStyles: ISpinnerStyles = {
        label: {
            fontSize: '20px', // Increase font size to 20px
            color: theme.palette.themePrimary,
            fontWeight: 600
        },
        circle: {
            borderTopColor: theme.palette.themePrimary
        },
        root: {
            color: theme.palette.themePrimary
        }
    };

    if (!loading) return null;

    return (
        <div
            className={styles.overlay}
            data-testid="spinnerContainer"
            style={{
                backgroundColor: theme.isInverted
                    ? 'rgba(0, 0, 0, 0.6)'
                    : 'rgba(255, 255, 255, 0.6)'
            }}
        >
            <Spinner
                label={label || undefined}
                size={SpinnerSize.large}
                styles={spinnerStyles}
            />
        </div>
    );
};

export default SpinnerComponent;
