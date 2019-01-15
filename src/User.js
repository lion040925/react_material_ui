import React from 'react';
import firebase from "./firebase";
import { Link } from 'react-router-dom';

class User extends React.Component {
    constructor(props) {
        super(props);        

        this.ref = firebase.firestore().collection('users');
        this.unsubscribe = null;   

        this.state = {
          email: "",
          fullname: "",
          boards: []
         };

      }

      onCollectionUpdate = (querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
          const { userid, usermsg, usernm } = doc.data();
          boards.push({
            key: doc.id,
            doc, // DocumentSnapshot
            userid,
            usermsg,
            usernm
          });
        });
        this.setState({          
          boards
       });
      }

      componentDidMount() {
        console.log("componentDidMount 1111 ");
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
      }

      updateInput = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

      addUser = e => {
        e.preventDefault();
        const { userid, usermsg, usernm } = this.state;

        this.ref.add({
          userid,
          usermsg,
          usernm
        }).then((docRef) => {
          this.setState({
            userid: '',
            usermsg: '',
            usernm: ''
          });
          this.props.history.push("/")
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      };
  render() {
    return (
      <div>
        <form onSubmit={this.addUser}>
          <input
            type="text"
            name="usernm"
            placeholder="사용자이름"
            value={this.state.usernm}
            onChange={this.updateInput}
          />
          <br/>
          <input
            type="email"
            name="userid"
            placeholder="사용자이메일"
            value={this.state.userid}
            onChange={this.updateInput}
          />
          <br/>
          <input
            type="text"
            name="usermsg"
            placeholder="사용자msg"
            value={this.state.usermsg}
            onChange={this.updateInput}
          />
          <br/>
          <button type="submit">Submit</button>
        </form>

        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              사용자목록
            </h3>
          </div>
          <div class="panel-body">            
            <table class="table table-stripe" border="1">
              <thead>
                <tr>
                  <th>사용자아이디</th>
                  <th>사용자메세지</th>
                  <th>사용자이름</th>
                </tr>
              </thead>
              <tbody>
                {this.state.boards.map(board =>
                  <tr>
                    <td>{board.userid}</td>
                    <td>{board.usermsg}</td>
                    <td>{board.usernm}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        </div>
        );
      }
   }
export default User;