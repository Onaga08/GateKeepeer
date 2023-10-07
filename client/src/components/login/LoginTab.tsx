import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

const LoginTab = () => (
  <Tabs.Root className="TabsRoot" defaultValue="tab1">
    <Tabs.List className="TabsList flex flex-row px-[9rem] justify-between" aria-label="Auth">
      <Tabs.Trigger className="TabsTrigger" value="tab1">
        Login
      </Tabs.Trigger>
      <Tabs.Trigger className="TabsTrigger" value="tab2">
        Signup
      </Tabs.Trigger>
    </Tabs.List>
    <Tabs.Content className="TabsContent" value="tab1">
      <fieldset className="Fieldset m-5">
        <label className="Label" htmlFor="username">
          Username:
        </label>
        <input className="Input" id="name" defaultValue="meltedhyperion" />
      </fieldset>
      <fieldset className="Fieldset m-5">
        <label className="Label" htmlFor="password">
          Password:
        </label>
        <input className="Input" id="username" />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button green">Login</button>
      </div>
    </Tabs.Content>
    <Tabs.Content className="TabsContent" value="tab2">
      <fieldset className="Fieldset m-5">
        <label className="Label" htmlFor="username">
          Username:
        </label>
        <input className="Input" id="username" type="text" />
      </fieldset>
      <fieldset className="Fieldset m-5">
        <label className="Label" htmlFor="Password">
          Password:
        </label>
        <input className="Input" id="Password" type="password" />
      </fieldset>
      <fieldset className="Fieldset m-5">
        <label className="Label" htmlFor="confirmPassword">
          Apartment: 
        </label>
        <input className="Input" id="confirmPassword" type="password" />
      </fieldset>
      <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
        <button className="Button green">Signup</button>
      </div>
    </Tabs.Content>
  </Tabs.Root>
);

export default LoginTab;