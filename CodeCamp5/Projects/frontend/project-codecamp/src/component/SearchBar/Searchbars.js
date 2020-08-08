import React, { Component } from 'react'
import { Card, Input } from 'antd'
import { connect } from 'react-redux';
import { fetchUser } from '../../actions'


class Searchbars extends Component {
    state = {
        search: ""
    }

    componentDidMount() {
        this.props.fetchUser()
    }

    renderUser = user => {
        const { search } = this.state



        return (
            <div>
                <Card>
                    <h3>ID : {user.id}</h3>
                    <span>{user.name}</span>
                </Card>

            </div>
        )
    }

    onChange = e => {
        this.setState({ search: e.target.value })
    }


    render() {
        const { search } = this.state
        const filterdUser = this.props.post.employees.filter(user => {
            return user.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })

        return (
            <div>
                <div>
                    <Input
                        onChange={this.onChange}
                    />
                </div>
                <div>
                    <h1>List user</h1>
                    {filterdUser.map(user => {
                        return this.renderUser(user)
                    })}
                </div>

            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return { post: state.posts }
}

const mapDispatchToProps = {
    fetchUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbars)