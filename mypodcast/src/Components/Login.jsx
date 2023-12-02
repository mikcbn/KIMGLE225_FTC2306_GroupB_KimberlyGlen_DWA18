import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import '@supabase/auth-ui/themes/supa.css'; // Import Supabase UI styles

const Login = () => {
  return (
    <div>
      <h2>Login</h2>
      <Auth supabaseClient={supabase} providers={['github']} />
    </div>
  );
};

export default Login;
