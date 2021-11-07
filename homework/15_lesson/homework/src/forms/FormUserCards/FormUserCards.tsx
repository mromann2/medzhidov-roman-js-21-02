import React from 'react';
import './FormUserCards.css';
import { UserCard } from '../../components/UserCard/UserCard';
import { UserType } from '../../types/dumMyApiResponses';
import ComponentWithHelper from '../../wrappers/withHelper';
import { getUserList } from '../../api/dumMyApi';


interface State {
    users: Array<UserType>;

}

const initialState = {
    users: [],
};

export class FormUserCards extends React.Component<any, State> {
    constructor(props: {}) {
        super(props);
        this.state = initialState;
        this.loadUsers = this.loadUsers.bind(this);
    }

    UNSAFE_componentWillMount(): void {
        this.loadUsers(0, 10);
    }

    loadUsers(page: number, limit: number) {
        getUserList(page, limit, (response: Array<UserType>) => this.setState({ users: response }));
    }

    render() {
        return (
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
          </section>
);
    }
}
