import React from 'react';
import { Auth } from '@supabase/auth-ui-react';
import '@supabase/auth-ui-react/themes/supa.css';  // Corrected import path
import { createClient } from '@supabase/supabase-js';
import { supabaseURL, supabaseAnonKey } from 'mypodcast/src/supabase1.jsx';

const supabase = createClient(supabaseURL, supabaseAnonKey);

const Login = () => (
  <div className="login-container">
    <div className="login-form">
      <h2>Login</h2>
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: 'supa' }}  // Corrected theme value
      />
    </div>
  </div>
);

export default Login;
