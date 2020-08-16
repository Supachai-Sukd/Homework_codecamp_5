import React, { Component, useEffect } from 'react'
import { Card, Input } from 'antd'
import { connect } from 'react-redux';
import { fetchUser } from '../../actions'


class Searchbars extends Component {
    state = {
        search: "",
        isShow: false
    }

    componentDidMount() {
        this.props.fetchUser()
    }

    

    renderUser = user => {
        const { search } = this.state

        let contents = (
            <div>
                <Card>
                    <h3>ID : {user.id}</h3>
                    <span>{user.name}</span>
                </Card>

            </div>
        )

        if (!this.state.isShow) {
            contents = (
                <div>
                <Card>
                    <h3></h3>
                    <span></span>
                </Card>

            </div>
            )
        }

        

        

        return (
            <div>
                {contents}

            </div>
        )
    }

   
    

    onChange = e => {
        this.setState({ search: e.target.value })
        this.onShow()
    }

    onShow = () => {
        this.setState({ isShow: true })
        
    }

    


    render() {
        const { search } = this.state
        const filterdUser = this.props.post.employees.filter(user => {
            return user.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })

        let showrenders = (
            filterdUser.map(user => {
                return this.renderUser(user)
            })
            )
           

        if (!this.state.isShow) {
            showrenders = (
                <div></div>
            )
        } else if (this.state.search.length <= 0) {
            this.setState({ isShow: false })
        }

        

        
            
                
            
        

        

          console.log(search.length)
        
        return (
            <div>
                <div>
                    <Input
                        onPressEnter={this.onChange}
                        
                        
                    />
                </div>
                <div>
                    <br/>

                    {showrenders}
                   
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