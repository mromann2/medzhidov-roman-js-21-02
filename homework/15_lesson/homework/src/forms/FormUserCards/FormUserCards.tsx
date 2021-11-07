import React from 'react';
import './FormUserCards.css';
import { UserCard } from '../../components/UserCard/UserCard';
import { UserType } from '../../types/dumMyApiResponses';
import ComponentWithHelper from '../../wrappers/withHelper';
import { getUserList } from '../../api/dumMyApi';
import { Button } from '../../components/Button/Button';
import { CheckBox } from '../../components/CheckBox/CheckBox';


interface State {
    users: Array<UserType>;
    page: number,
}

const initialState = {
    users: [],
    page: 0,
};

export class FormUserCards extends React.Component<any, State> {
    constructor(props: {}) {
        super(props);
        this.state = initialState;
        this.loadUsers = this.loadUsers.bind(this);
        this.addButtons = this.addButtons.bind(this);
        this.handlerClick = this.handlerClick.bind(this);
    }

    componentDidMount(): void {
        this.loadUsers(this.state.page, 10);
    }

    handlerClick(num: number): void {
        this.setState({
            page: num - 1,
        }, () => this.loadUsers(this.state.page, 10));
    }

    loadUsers(page: number, limit: number) {
        getUserList(page, limit, (response: Array<UserType>) => this.setState({ users: response }));
    }

    addButtons() {
        if (this.state.users.length) {
            return (
              <>
                <Button number={1} handler={this.handlerClick} />
                <Button number={2} handler={this.handlerClick} />
                <Button number={3} handler={this.handlerClick} />
                <Button number={4} handler={this.handlerClick} />
                <Button number={5} handler={this.handlerClick} />
              </>
);
        } return null;
    }

    render() {
        return (
          <>
            <section className="form-user-cards">
              {this.state.users.length !== 0
                      ? this.state.users.map((user: UserType, index: number) => (
                        <ComponentWithHelper comment={user.id || 'Здесь должен быть ID'}>
                          <UserCard
                            key={index}
                            id={user.id}
                            title={user.title}
                            firstName={user.firstName}
                            lastName={user.lastName}
                            picture={user.picture}
                          />
                        </ComponentWithHelper>
                      ))
                      : 'No users'}
              <div>{this.addButtons()}</div>
              <CheckBox />
            </section>
          </>
);
    }
}
