import findUser from '~/graphql/findUser.gql'
import { print } from 'graphql/language/printer'

import jwt from 'jsonwebtoken'

export default async function ({ app, store, redirect, error }) {
  const Token = app.$apolloHelpers.getToken();
  if (!Token) {
    return redirect('/login')
  } else {
    const UserID = jwt.verify(Token,process.env.JWT_SECRET).id
    if(!store.state.user || store.state.user._id != UserID){
      await app.$axios.$post(process.env.HTTP_ENDPOINT,{
        query:print(findUser),
        variables:{
          _id: UserID,
        }
      }).then((result) => {
        store.commit('setUser',result.data.user);
      });
    }
  }
}