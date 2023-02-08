import React from 'react'
import logo from './logo.svg';
import './App.css';
import PostForm from './PostForm';
// import Greet from './Greet';
// import Welcome from './Welcome';
// import Message from './Message';
// import RefsDemo from './RefsDemo';
// import FRParentInput from './FRParentInput';
// import Hero from './Hero';
//import ErrorBoundry from './ErrorBoundry';
//import ClickCounter from './ClickCounter';
//import HoverCounter from './HoverCounter';
//import ComponentC from './ComponentC';
//import { UserProvider } from './UserContext';
import PostList from './PostList';
import HooksCounter from './Hooks/HooksCounter';
 import Counter from './Counter';
import HookCounter2 from './Hooks/HookCounter2';
import HooksCounter3 from './Hooks/HooksCounter3';
import HooksCounter4 from './Hooks/HooksCounter4';
import HooksCounterOne from './HooksUseEffect/HooksCounterOne';
import HookMouse from './HooksUseEffect/HookMouse';
import MouseContainer from './HooksUseEffect/MouseContainer';
import IntervalHookCounter from './HooksUseEffect/IntervalHookCounter';
import DataFectching from './HooksUseEffect/DataFetching';
import { Component } from 'react';
import ComponentCUserContext from './HooksUseContex/ComponentCUserContext';
import CounterOne from './HooksUseReducer/CounterOne';

// import FunctionClick from './FunctionClick';
// import EventBind from './EventBind';
// import ParentComponent from './ParentComponent';
// import UserGreeting from './UserGreeting';
// import NameList from './NameList';
// import StyleSheet from './StyleSheet';
// import Inline from './Inline';
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './Form';
// import FragmentDemo from './FragmentDemo';
// import ParentComp from './ParentComp';
export const UserContext=React.createContext()
export const ChannelContext=React.createContext()
// this is my app component
function App() {
  return (
    <div className="App">
      <CounterOne></CounterOne>
      {/* <UserContext.Provider value={'seema'}>
        <ChannelContext.Provider value={'Pankaj'}>
        <ComponentCUserContext></ComponentCUserContext>
        </ChannelContext.Provider>
      </UserContext.Provider> */}


      
      {/* <DataFectching></DataFectching> */}
      {/* <IntervalHookCounter></IntervalHookCounter> */}
      {/* <HookMouse></HookMouse> */}
      {/* <MouseContainer></MouseContainer> */}
      {/* <HooksCounterOne></HooksCounterOne> */}
      {/* <HooksCounter4></HooksCounter4> */}
      {/* <HooksCounter3></HooksCounter3> */}
      {/* <HooksCounter></HooksCounter> */}
      {/* <PostForm></PostForm> */}
      {/* <PostList></PostList> */}
      {/* <UserProvider value="Seema">
      <ComponentC></ComponentC> */}

      {/* </UserProvider> */}
      {/* <ClickCounter name="seema"></ClickCounter>
      // <HoverCounter></HoverCounter> */}
      {/* <ErrorBoundry>
      // <Hero heroName="Batman"></Hero>
      // <Hero heroName="Superman"></Hero> */}
      {/* <Hero heroName="Joker"></Hero> */}
      {/* </ErrorBoundry> */}
      {/* <FRParentInput></FRParentInput> */}
      {/* <RefsDemo></RefsDemo> */}
      {/* <ParentComp></ParentComp> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <Form></Form> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.Success}>Success</h1>
      <Inline></Inline> */}
     {/* <StyleSheet primary={true}></StyleSheet> */}
       {/* <NameList></NameList> */}
      {/* <UserGreeting></UserGreeting> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <EventBind></EventBind> */}
      {/* <FunctionClick></FunctionClick> */}
      {/* <Counter></Counter> */}
      {/*<Message></Message>
       <Greet name="Ishaan" age="8">
        <p>This is children props</p>
      </Greet>
      <Greet name="Akshara" age="7">
        <button>Action</button>
      </Greet>
      <Greet name="Pankaj" age="40"></Greet>

      <Welcome name="Apple" color="Red"></Welcome> */}
    </div>
  );
}

export default App;
