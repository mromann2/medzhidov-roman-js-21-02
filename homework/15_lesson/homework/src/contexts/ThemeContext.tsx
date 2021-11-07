import React, { ReactNode } from 'react';

export interface ThemeContextState {
    darkTheme: boolean,
    toggleTheme: () => void,
}

interface Props {
    children: ReactNode,
}

const { Provider, Consumer } = React.createContext<Partial<ThemeContextState>>({});

class ThemeContextProvider extends React.Component<Props, ThemeContextState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            darkTheme: false,
            toggleTheme: this.toggleTheme.bind(this),
        };
    }

    toggleTheme() {
        this.setState((state) => ({ darkTheme: !state.darkTheme }));
    }

    render() {
        return (
          <Provider value={{
            darkTheme: this.state.darkTheme,
            toggleTheme: this.state.toggleTheme,
        }}
          >
            {this.props.children}
          </Provider>
);
    }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
