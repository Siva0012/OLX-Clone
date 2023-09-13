import React from 'react';
import { useEffect , useState , useContext } from 'react';

import './View.css';
import { PostContext } from '../../Store/PostContext ';
import { FirebaseContext } from '../../Store/Context';
function View() {

  const [userDetails , setUserDetails] = useState()
  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext(FirebaseContext)

  useEffect(() =>{
    const {userId} = postDetails
    console.log(userId);
    firebase.firestore().collection('users').where('id' , '==' , userId).get()
    .then((response) => {
      response.forEach((element) =>{
        setUserDetails(element.data())
        console.log(element.data());
      })
    })
  } , [postDetails , firebase , userDetails] )


  return (
   
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails?.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        {postDetails && (
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>)
        }
        { userDetails && <div className="contactDetails">
          <p>Seller details</p>
          {userDetails?.username && <p>{userDetails.username}</p>}
          {userDetails?.phonw && <p>{userDetails.phone}</p>}
        </div>}
      </div>
    </div>
  );
}
export default View;
