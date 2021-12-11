import React, { ReactNode, SyntheticEvent, useEffect } from 'react';
import './WithHelper.scss';
import { connect, useSelector } from 'react-redux';
import { State } from '../types/state';

interface StateM {
    hovered: boolean;
}

interface Props {
    children: ReactNode;
    comment: string;
}

const mapStateToProps = (state: State) => ({
    isDark: state.isDark.isDark,
});

 class ComponentWithHelper extends React.Component<Props, StateM> {
        constructor(props: any) {
            super(props);
            this.state = {
                hovered: false,
            };
            this.mouseOver = this.mouseOver.bind(this);
            this.mouseOut = this.mouseOut.bind(this);
        }

        mouseOver(e: SyntheticEvent) {
            this.setState({ hovered: true });
            e.stopPropagation();
        }

        mouseOut(e: SyntheticEvent) {
            this.setState({ hovered: false });
            e.stopPropagation();
        }

        render() {
            console.log('пропсы:', this.props);
            return (
              // @ts-ignore
              <div className={this.props.isDark ? 'component-with-helper component-with-helper_dark' : 'component-with-helper'} onMouseOut={this.mouseOut} onMouseOver={this.mouseOver}>
                {this.state.hovered
                && <div className="component-with-helper__helper">{this.props.comment}</div>}
                {this.props.children}
              </div>
);
        }
    }

export default connect(
    mapStateToProps,
)(ComponentWithHelper);
