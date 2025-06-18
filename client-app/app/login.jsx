import React from 'react';
import SafeView from '~/components/SafeView';
import Main from "~/components/Login/main";

export default function Login() {
  return (
    <SafeView>
      <Main />
    </SafeView>
  )
}