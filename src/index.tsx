

console.log("AQUI X");
 
 // ---------- import React Packs
 import React from 'react';
 import * as RN from 'react-native';
 
 // ---------- import Variables Pack
 import { create } from 'zustand';
 
 // ---------- import Local Tools
 // import {mapElements} from './tools/base/project/mapElements';
 import { Project, Screen } from './tools/base/project';
 // import * as functions from './tools/base/functions';
 import * as Elements from './tools/base/Elements';
 // import * as jsvals from './tools/base/jsvals';
 // import { props } from './tools/base/props';
 // import * as customs from './tools/customs';
 // import * as stls from './tools/base/stls';
 // import { tools } from "./tools";
 
 // ---------- set Caps Inputs
 const currRoute = 'home'
 
 let args:any = []
 
 const screens = [
 
 
 (...args: any) => <Screen pass={{
 pathScreen:"home",
 
 styles:[
 {
 backgroundColor: '#101',
 justifyContent: 'center',
 alignItems: 'center',
 height: '100%',
 width: '100%',
 }
 ],
 
 screenElements:[
 (...args:any) => <Elements.Text pass={{
 arrProps: [
 {}
 ],
 
 arrStyles: [
 { color: 'white', fontSize: 14, }
 ],
 
 children: [
 "Olá Morfos 1!!!"
 ],
 
 args,
 
 }}/>, (...args:any) => <Elements.Text pass={{
 arrProps: [
 {}
 ],
 
 arrStyles: [
 { color: 'white', fontSize: 14, }
 ],
 
 children: [
 "Escreva..."
 ],
 
 args,
 
 }}/>],
 
 startFunctions:[()=>{}],
 
 args,
 }}/>, 
 (...args: any) => <Screen pass={{
 pathScreen:"home",
 
 styles:[
 {
 backgroundColor: '#101',
 justifyContent: 'center',
 alignItems: 'center',
 height: '100%',
 width: '100%',
 }
 ],
 
 screenElements:[() => {
 const textStyle = {
 fontSize: 20,
 color: '#fff2',
 textAlign:'center',
 maxWidth: 200,
 // maxWidth: '200px'<= #ATTENTION: Native ERROR! No string!
 };
 
 return (
 <RN.Text style={textStyle}>
 {'Adicione Elementos nessa tela!'}
 </RN.Text>);
 }],
 
 startFunctions:[()=>{}],
 
 args,
 }}/>
 ]
 
 const initCt = () => ({
 true: "true"
 });
 const initObj = initCt();
 
 const arrInitFuncs = [
 ()=>{}
 ];
 
 export const useRoutes = create(() => ({ currRoute }));
 export const useData = create(() => initObj);
 
 // ---------- set Main Component
 export const Router = () => {
 return (
 <Project
 configData={{
 screens,
 initCt,
 arrInitFuncs,
 }}
 />
 );
 };
