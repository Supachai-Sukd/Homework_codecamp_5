import React from 'react'
import { List, Avatar, Row } from 'antd';
import Leftmenu from '../Template-menu/Left-menu'
import { Layout, Button, Skeleton } from 'antd';
import Navbar from '../Template-menu/Navbar'
import { fetchNotebook } from '../../actions'
import { connect } from 'react-redux';
import reqwest from 'reqwest';

const count = 0
 
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;


class Viewnotebook extends React.Component {

  state = {
    initLoading: true,
    loading: false,
    list: []
  };

  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        list: [this.props.fetchNotebook()]
      });
    });
  }


  getData = callback => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: res => {
        callback(res);
      },
    });
  };


  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.props.postsnotebook.laptops.concat([...new Array(count)].map(() => ({ loading: true, brand: {} }))),
    });
    this.getData(res => {
      const data = this.props.postsnotebook.laptops.concat(res.results);
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        },
      );
    });
  };


  render() {

    const { initLoading, loading, list } = this.state;
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;





    return (
      <div>
        <Layout>
          <Navbar />
          <Layout>
            <Leftmenu />
            <Layout>







              <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                renderItem={obj => (
                  <List.Item
                    actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                  >


                    <Skeleton avatar title={false} loading={obj.loading} active>

                      {this.props.postsnotebook.laptops.map( (obj) => <List.Item.Meta
                        avatar={
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={<a href="https://ant.design">{obj.brand}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"

                      /> )}
             


               


                      <div>content</div>


                    </Skeleton>



                  </List.Item>
                )}
              />







            </Layout>
          </Layout>
        </Layout>




      </div>
    )
  }
















}



const mapStateToProps = (state) => {
  return { postsnotebook: state.postsnotebook }
}

const mapDispatchToProps = {
  fetchNotebook
}


export default connect(mapStateToProps, mapDispatchToProps)(Viewnotebook)
