

          // ---------- import React Packs
          import React from 'react';
          import * as RN from 'react-native';

          // ---------- import Variables Pack
          import { create } from 'zustand';

          // ---------- import Local Tools
          import { mapElements } from './tools/base/project/mapElements';
          import * as functions from './tools/base/functions';
          import * as Elements from './tools/base/Elements';
          import { Project } from './tools/base/project';
          import * as jsvals from './tools/base/jsvals';
          import { props } from './tools/base/props';
          import * as customs from './tools/customs';
          import * as stls from './tools/base/stls';
          import { tools } from './tools';

          // ---------- set Caps Inputs
          const currRoute = 'ab0login';

          let args: any = [];

          const screens = [
            // 

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"ab0login",

          styles:[

stls.flex({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "1px"
        }})] }}), 
stls.width({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "100%"
        }})] }}), stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "100%"
        }})] }}), 

stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), stls.justifyContent({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), stls.backgroundColor({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.primary"
        }})
        }})] }})],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[

stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), stls.justifyContent({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), 
stls.padding({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "15px"
        }})] }}), 
stls.borderRadius({ pass: { arrayValue: [10] }}), 
stls.shadows({ pass: {
          shadowColor: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.dark"
        }})
        }})],
          shadowOffset: ['{width: 0, height: 0}'],
          shadowOpacity: [jsvals.j8({pass: {
          propertieValues: "0.2"
        }})],
          shadowRadius: [jsvals.j8({pass: {
          propertieValues: "10px"
        }})],
        }}), 
stls.maxWidth({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "260px"
        }})] }}), stls.backgroundColor({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.light"
        }})
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[
        (...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
stls.paddingHorizontal({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "30px"
        }})] }}), 
stls.paddingVertical({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "6px"
        }})] }}), 
stls.borderRadius({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "8px"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.primary"
        }})
        }})] }}), 
stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), stls.justifyContent({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

          childrenItems: [(...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            stls.color({ pass: { arrayValue: ["white"] }})
          ],

          children: [
            jsvals.j8({pass: {
          propertieValues: "A1 Login ADM"
        }})
          ],

          args,

        }}/>],

          pressableFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a1login");
        }
        ],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "10px"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
stls.paddingHorizontal({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "30px"
        }})] }}), 
stls.paddingVertical({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "6px"
        }})] }}), 
stls.borderRadius({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "8px"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.primary"
        }})
        }})] }}), 
stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), stls.justifyContent({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

          childrenItems: [(...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            stls.color({ pass: { arrayValue: ["white"] }})
          ],

          children: [
            jsvals.j8({pass: {
          propertieValues: "B1 Login APP"
        }})
          ],

          args,

        }}/>],

          pressableFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("b1login");
        }
        ],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "10px"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
stls.paddingHorizontal({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "30px"
        }})] }}), 
stls.paddingVertical({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "6px"
        }})] }}), 
stls.borderRadius({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "8px"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.primary"
        }})
        }})] }}), 
stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), stls.justifyContent({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

          childrenItems: [(...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            stls.color({ pass: { arrayValue: ["white"] }})
          ],

          children: [
            jsvals.j8({pass: {
          propertieValues: "Dev Tools"
        }})
          ],

          args,

        }}/>],

          pressableFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0devtools");
        }
        ],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "10px"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[{}],

            styles:[stls.height({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "10px"
        }})] }})],

            variablePath:[ ],

            expectedVal:[ ],

            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Pressable3 pass={{
          elementProperties: [{}],

          styles: [
stls.paddingHorizontal({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "30px"
        }})] }}), 
stls.paddingVertical({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "6px"
        }})] }}), 
stls.borderRadius({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "8px"
        }})] }}), 
stls.backgroundColor({ pass: { arrayValue: [jsvals.varReader({pass: {
          path: jsvals.j8({pass: {
          propertieValues: "all.colors.primary"
        }})
        }})] }}), 
stls.alignItems({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }}), stls.justifyContent({ pass: { arrayValue: [jsvals.j8({pass: {
          propertieValues: "center"
        }})] }})],

          childrenItems: [(...args:any) => <Elements.Text pass={{
          arrProps: [
            {}
          ],

          arrStyles: [
            stls.color({ pass: { arrayValue: ["white"] }})
          ],

          children: [
            jsvals.j8({pass: {
          propertieValues: "Testing Now"
        }})
          ],

          args,

        }}/>],

          pressableFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("b3MyProfile");
        }
        ],

          args,
        }}/>],

            args,
          }}/>
        ],

          startFunctions:[()=>{}],

          args,
        }}/>
          ];

          const initCt = () => ({
            // 
        "true": jsvals.j8({pass: {
          propertieValues: "true"
        }}), 
        'all': jsvals.j8({pass: {
          propertieValues: { 
        'firebaseConfig': jsvals.j8({pass: {
          propertieValues: { 
        "apiKey": jsvals.j8({pass: {
          propertieValues: "AIzaSyDjAfyEUADq7EaRyFWlGFjP1Eoox9LJHgI"
        }}), 
        "authDomain": jsvals.j8({pass: {
          propertieValues: "devs-tests-95208.firebaseapp.com"
        }}), 
        "projectId": jsvals.j8({pass: {
          propertieValues: "devs-tests-95208"
        }}), 
        "storageBucket": jsvals.j8({pass: {
          propertieValues: "devs-tests-95208.appspot.com"
        }}), 
        "messagingSenderId": jsvals.j8({pass: {
          propertieValues: "750912250366"
        }}), "appId": jsvals.j8({pass: {
          propertieValues: "1:750912250366:web:4629eac789a718a74220af"
        }}) }
        }}), 
        'colors': jsvals.j8({pass: {
          propertieValues: { 
        "dark": jsvals.j8({pass: {
          propertieValues: "#000"
        }}), 
        "light": jsvals.j8({pass: {
          propertieValues: "#fff"
        }}), 
        "primary": jsvals.j8({pass: {
          propertieValues: "#2D3249"
        }}), 
        "secondary": jsvals.j8({pass: {
          propertieValues: "#25293C"
        }}), 
        "success": jsvals.j8({pass: {
          propertieValues: "#198754"
        }}), 
        "danger": jsvals.j8({pass: {
          propertieValues: "#dc3545"
        }}), 
        "warning": jsvals.j8({pass: {
          propertieValues: "#ffc107"
        }}), 
        "info": jsvals.j8({pass: {
          propertieValues: "#0dcaf0"
        }}), 
        "gray1": jsvals.j8({pass: {
          propertieValues: "#eeeeee"
        }}), 
        "gray2": jsvals.j8({pass: {
          propertieValues: "#dddddd"
        }}), 
        "gray3": jsvals.j8({pass: {
          propertieValues: "#cccccc"
        }}), 
        "gray4": jsvals.j8({pass: {
          propertieValues: "#bbbbbb"
        }}), 
        "gray5": jsvals.j8({pass: {
          propertieValues: "#a3a3a3"
        }}), 
        "backDS": jsvals.j8({pass: {
          propertieValues: "#D3D3D3"
        }}), 
        "defaultScreenBg": jsvals.j8({pass: {
          propertieValues: "rgb(245, 245, 245)"
        }}), 
        "bgMenuOut": jsvals.j8({pass: {
          propertieValues: "#16161E"
        }}), 
        "bgMenuIn": jsvals.j8({pass: {
          propertieValues: "#242434"
        }}), 
        "purple": jsvals.j8({pass: {
          propertieValues: "#7826FF"
        }}), 
        "bgBigScreen": jsvals.j8({pass: {
          propertieValues: "#F0F0F0"
        }}), 
        "btnHover": jsvals.j8({pass: {
          propertieValues: "#9f65ff"
        }}), 
        "btnDisable": jsvals.j8({pass: {
          propertieValues: "#d0d0d0"
        }}), 
        "secundarySM": jsvals.j8({pass: {
          propertieValues: "#2F3349"
        }}), "lightSM": jsvals.j8({pass: {
          propertieValues: "#CFCDE4"
        }}) }
        }}), 
        'textSizes': jsvals.j8({pass: {
          propertieValues: { 
        "small": jsvals.j8({pass: {
          propertieValues: "12px"
        }}), 
        "medium": jsvals.j8({pass: {
          propertieValues: "14px"
        }}), 
        "large": jsvals.j8({pass: {
          propertieValues: "16px"
        }}), "superLarge": jsvals.j8({pass: {
          propertieValues: "18px"
        }}) }
        }}), 
        'user': jsvals.j8({pass: {
          propertieValues: { 
        "userImage": jsvals.j8({pass: {
          propertieValues: "https://t3.ftcdn.net/jpg/02/22/85/16/360_F_222851624_jfoMGbJxwRi5AWGdPgXKSABMnzCQo9RN.jpg"
        }}), 
        "userName": jsvals.j8({pass: {
          propertieValues: "Paulo Antônio"
        }}), "userEmail": jsvals.j8({pass: {
          propertieValues: "pauloantonio@gmail.com"
        }}) }
        }}), 
        'toggles': jsvals.j8({pass: {
          propertieValues: { 
        "sideMenu": jsvals.j8({pass: {
          propertieValues: "hide"
        }}), 
        "activeForm": jsvals.j8({pass: {
          propertieValues: "none"
        }}), 
        "rightOptions": jsvals.j8({pass: {
          propertieValues: "close"
        }}), 
        "radioButton": jsvals.j8({pass: {
          propertieValues: "unselected"
        }}), 
        'activeButton': jsvals.j8({pass: {
          propertieValues: { 
        "myProfile": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "users": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "map": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "permissions": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "exit": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "iconsDS": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "pressDS": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "colorsDS": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "formsDS": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "txtIptDS": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "pickerDS": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "radioDS": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "viewsDS": jsvals.j8({pass: {
          propertieValues: "active"
        }}), 
        "cardsDS": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "alertDS": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "typesDS": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "navBarsDS": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "listsDS": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "searchDS": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "bannerDS": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "products": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "accordionDS": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), "statusDS": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}) }
        }}), 
        "btnSearch": jsvals.j8({pass: {
          propertieValues: "all"
        }}), 
        'searchBy': jsvals.j8({pass: {
          propertieValues: { 
        "name": jsvals.j8({pass: {
          propertieValues: "unselected"
        }}), 
        "email": jsvals.j8({pass: {
          propertieValues: "unselected"
        }}), "CPF": jsvals.j8({pass: {
          propertieValues: "unselected"
        }}) }
        }}), 
        "emptyField": jsvals.j8({pass: {
          propertieValues: "no"
        }}), 
        "emptyFieldSearch": jsvals.j8({pass: {
          propertieValues: "no"
        }}), 
        "activePicker": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "radio1": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "radio2": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "check1": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "check2": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "fileUpload": jsvals.j8({pass: {
          propertieValues: "toUpload"
        }}), 
        "radioText1": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "radioText2": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        "menuViews": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), "menuForms": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}) }
        }}), 
        'teste': jsvals.j8({pass: {
          propertieValues: { 
        'emptyArray': jsvals.j8({pass: {
          propertieValues: [   ]
        }}), 
        'mockList': jsvals.j8({pass: {
          propertieValues: [ 
        jsvals.j8({pass: {
          propertieValues: {
        "userName": jsvals.j8({pass: {
          propertieValues: "Claudio Silva"
        }}), 
        "userEmail": jsvals.j8({pass: {
          propertieValues: "silvacaca@gmail.com"
        }}), "userStatus": jsvals.j8({pass: {
          propertieValues: "Bloqueado"
        }})}
        }}), jsvals.j8({pass: {
          propertieValues: {
        "userName": jsvals.j8({pass: {
          propertieValues: "Pedro Santos"
        }}), 
        "userEmail": jsvals.j8({pass: {
          propertieValues: "psantos@gmail.com"
        }}), "userStatus": jsvals.j8({pass: {
          propertieValues: "Liberado"
        }})}
        }}) ]
        }}), "mockHorizontalLogo": jsvals.j8({pass: {
          propertieValues: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt8M10LRk9SJTEkpbXDU04mr6Fi2o_XKRReg&s"
        }}) }
        }}), 'utils': jsvals.j8({pass: {
          propertieValues: { "logo": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2Fmorfos-logo.d2181ead.png?alt=media&token=0e450878-ad31-46f0-b28f-abebb0c6abc9"
        }}) }
        }}) }
        }}), 
        'sc': jsvals.j8({pass: {
          propertieValues: { 
        'AB0': jsvals.j8({pass: {
          propertieValues: { "textTest": jsvals.j8({pass: {
          propertieValues: "Used to truncate the text with an ellipsis after computing the text layout, including line wrapping, such that the total number of lines does not exceed this number. Setting this property to 0 will result in unsetting this value, which means that no lines restriction will be applied."
        }}) }
        }}), 
        'A1': jsvals.j8({pass: {
          propertieValues: { 
        "titleName": jsvals.j8({pass: {
          propertieValues: "Start Morfos"
        }}), 
        "login": jsvals.j8({pass: {
          propertieValues: "LOGIN"
        }}), 
        "password": jsvals.j8({pass: {
          propertieValues: "SENHA"
        }}), 
        "loginUsing": jsvals.j8({pass: {
          propertieValues: "Entrar usando sua conta..."
        }}), 
        "confirm": jsvals.j8({pass: {
          propertieValues: "Confirmar"
        }}), 
        "mockID": jsvals.j8({pass: {
          propertieValues: "AduXSCnqEOjhwPeplNnQ"
        }}), 
        'toggles': jsvals.j8({pass: {
          propertieValues: { 
        "msgError": jsvals.j8({pass: {
          propertieValues: "no value"
        }}), "userBlock": jsvals.j8({pass: {
          propertieValues: "no value"
        }}) }
        }}), "boxCardCenter": jsvals.j8({pass: {
          propertieValues: "true"
        }}) }
        }}), 
        'A2': jsvals.j8({pass: {
          propertieValues: { 
        "state": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        'sideLeft': jsvals.j8({pass: {
          propertieValues: { 
        "myProfile": jsvals.j8({pass: {
          propertieValues: "Meu Perfil"
        }}), 
        "users": jsvals.j8({pass: {
          propertieValues: "Usuários"
        }}), 
        "map": jsvals.j8({pass: {
          propertieValues: "Mapa"
        }}), "exit": jsvals.j8({pass: {
          propertieValues: "Sair"
        }}) }
        }}), 
        'toggles': jsvals.j8({pass: {
          propertieValues: {   }
        }}), 
        'navBar': jsvals.j8({pass: {
          propertieValues: { "labelView": jsvals.j8({pass: {
          propertieValues: "Start Morfos"
        }}) }
        }}), 
        'bannerView': jsvals.j8({pass: {
          propertieValues: { 
        "label": jsvals.j8({pass: {
          propertieValues: "USUÁRIOS"
        }}), 
        "description": jsvals.j8({pass: {
          propertieValues: "Description"
        }}), 
        "addUser": jsvals.j8({pass: {
          propertieValues: "ADICIONAR"
        }}), "pathScreen": jsvals.j8({pass: {
          propertieValues: "Caminho da Tela"
        }}) }
        }}), 
        "cleanSearch": jsvals.j8({pass: {
          propertieValues: "hidden"
        }}), 
        'contentList': jsvals.j8({pass: {
          propertieValues: { 'header': jsvals.j8({pass: {
          propertieValues: { 
        "name": jsvals.j8({pass: {
          propertieValues: "Nome"
        }}), 
        "email": jsvals.j8({pass: {
          propertieValues: "E-mail"
        }}), "CPF": jsvals.j8({pass: {
          propertieValues: "CPF"
        }}) }
        }}) }
        }}), 'pickers': jsvals.j8({pass: {
          propertieValues: { 'searchFilter': jsvals.j8({pass: {
          propertieValues: [ 
        jsvals.j8({pass: {
          propertieValues: {
        "id": jsvals.j8({pass: {
          propertieValues: "Nome"
        }}), "label": jsvals.j8({pass: {
          propertieValues: "Nome"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {
        "id": jsvals.j8({pass: {
          propertieValues: "E-mail"
        }}), "label": jsvals.j8({pass: {
          propertieValues: "E-mail"
        }})}
        }}), jsvals.j8({pass: {
          propertieValues: {
        "id": jsvals.j8({pass: {
          propertieValues: "CPF"
        }}), "label": jsvals.j8({pass: {
          propertieValues: "CPF"
        }})}
        }}) ]
        }}) }
        }}) }
        }}), 
        'A3': jsvals.j8({pass: {
          propertieValues: { 
        "state": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        'forms': jsvals.j8({pass: {
          propertieValues: { 
        'iptsChanges': jsvals.j8({pass: {
          propertieValues: {   }
        }}), 
        'editData': jsvals.j8({pass: {
          propertieValues: { "userCPF": jsvals.j8({pass: {
          propertieValues: "111.111.111-11"
        }}) }
        }}), 'pickers': jsvals.j8({pass: {
          propertieValues: { 'status': jsvals.j8({pass: {
          propertieValues: [ 
        jsvals.j8({pass: {
          propertieValues: {
        "id": jsvals.j8({pass: {
          propertieValues: "Ativo"
        }}), "label": jsvals.j8({pass: {
          propertieValues: "Ativo"
        }})}
        }}), jsvals.j8({pass: {
          propertieValues: {
        "id": jsvals.j8({pass: {
          propertieValues: "Bloqueado"
        }}), "label": jsvals.j8({pass: {
          propertieValues: "Bloqueado"
        }})}
        }}) ]
        }}) }
        }}) }
        }}), 
        'mock': jsvals.j8({pass: {
          propertieValues: { "ID": jsvals.j8({pass: {
          propertieValues: "IlDHibyjRw8pE1V6I6oO"
        }}) }
        }}), 'toggles': jsvals.j8({pass: {
          propertieValues: { "fileUpload": jsvals.j8({pass: {
          propertieValues: "preload"
        }}) }
        }}) }
        }}), 
        'A4': jsvals.j8({pass: {
          propertieValues: { 
        "state": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 'mainList': jsvals.j8({pass: {
          propertieValues: { 
        "show": jsvals.j8({pass: {
          propertieValues: "false"
        }}), 'no name': jsvals.j8({pass: {
          propertieValues: [   ]
        }}) }
        }}) }
        }}), 
        'A5': jsvals.j8({pass: {
          propertieValues: { 
        "state": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        'forms': jsvals.j8({pass: {
          propertieValues: { 
        'iptsChanges': jsvals.j8({pass: {
          propertieValues: {   }
        }}), 'editData': jsvals.j8({pass: {
          propertieValues: {   }
        }}) }
        }}), 
        "male": jsvals.j8({pass: {
          propertieValues: "Masculino"
        }}), "female": jsvals.j8({pass: {
          propertieValues: "Feminino"
        }}) }
        }}), 
        'A6': jsvals.j8({pass: {
          propertieValues: { 
        'currData': jsvals.j8({pass: {
          propertieValues: { 'locationsList': jsvals.j8({pass: {
          propertieValues: [   ]
        }}) }
        }}), 
        'lists': jsvals.j8({pass: {
          propertieValues: { 'mainList': jsvals.j8({pass: {
          propertieValues: [   ]
        }}) }
        }}), 
        'toggles': jsvals.j8({pass: {
          propertieValues: { "show": jsvals.j8({pass: {
          propertieValues: "false"
        }}) }
        }}), 'mainList': jsvals.j8({pass: {
          propertieValues: { 
        "show": jsvals.j8({pass: {
          propertieValues: "false"
        }}), 'no name': jsvals.j8({pass: {
          propertieValues: [   ]
        }}) }
        }}) }
        }}), 
        'A7': jsvals.j8({pass: {
          propertieValues: { 
        "state": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 'forms': jsvals.j8({pass: {
          propertieValues: { 
        'iptsChanges': jsvals.j8({pass: {
          propertieValues: {   }
        }}), 
        'editData': jsvals.j8({pass: {
          propertieValues: {   }
        }}), 'pickers': jsvals.j8({pass: {
          propertieValues: { 'status': jsvals.j8({pass: {
          propertieValues: [ 
        jsvals.j8({pass: {
          propertieValues: {
        "id": jsvals.j8({pass: {
          propertieValues: "Disponível"
        }}), "label": jsvals.j8({pass: {
          propertieValues: "Disponível"
        }})}
        }}), jsvals.j8({pass: {
          propertieValues: {
        "id": jsvals.j8({pass: {
          propertieValues: "Indisponível"
        }}), "label": jsvals.j8({pass: {
          propertieValues: "Indisponível"
        }})}
        }}) ]
        }}) }
        }}) }
        }}) }
        }}), 
        'A8': jsvals.j8({pass: {
          propertieValues: { 
        "state": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 'mainList': jsvals.j8({pass: {
          propertieValues: { 
        "show": jsvals.j8({pass: {
          propertieValues: "false"
        }}), 'no name': jsvals.j8({pass: {
          propertieValues: [   ]
        }}) }
        }}) }
        }}), 
        'A9': jsvals.j8({pass: {
          propertieValues: { 
        "state": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 'forms': jsvals.j8({pass: {
          propertieValues: { 
        'iptsChanges': jsvals.j8({pass: {
          propertieValues: {   }
        }}), 
        'editData': jsvals.j8({pass: {
          propertieValues: {   }
        }}), 'pickers': jsvals.j8({pass: {
          propertieValues: { 'typeAccount': jsvals.j8({pass: {
          propertieValues: [ 
        jsvals.j8({pass: {
          propertieValues: {
        "id": jsvals.j8({pass: {
          propertieValues: "Adm"
        }}), "label": jsvals.j8({pass: {
          propertieValues: "Adm"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {
        "id": jsvals.j8({pass: {
          propertieValues: "Manager"
        }}), "label": jsvals.j8({pass: {
          propertieValues: "Manager"
        }})}
        }}), jsvals.j8({pass: {
          propertieValues: {
        "id": jsvals.j8({pass: {
          propertieValues: "Reader"
        }}), "label": jsvals.j8({pass: {
          propertieValues: "Reader"
        }})}
        }}) ]
        }}) }
        }}) }
        }}) }
        }}), 
        'A10': jsvals.j8({pass: {
          propertieValues: { 
        "state": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        'mainList': jsvals.j8({pass: {
          propertieValues: { 
        "show": jsvals.j8({pass: {
          propertieValues: "false"
        }}), 'no name': jsvals.j8({pass: {
          propertieValues: [   ]
        }}) }
        }}), 'toggles': jsvals.j8({pass: {
          propertieValues: { 'sideRight': jsvals.j8({pass: {
          propertieValues: { "show": jsvals.j8({pass: {
          propertieValues: "false"
        }}) }
        }}) }
        }}) }
        }}), 
        'A11': jsvals.j8({pass: {
          propertieValues: { 
        "state": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        'forms': jsvals.j8({pass: {
          propertieValues: { 
        'iptsChanges': jsvals.j8({pass: {
          propertieValues: {   }
        }}), 'editData': jsvals.j8({pass: {
          propertieValues: {   }
        }}) }
        }}), 'currData': jsvals.j8({pass: {
          propertieValues: { "itemID": jsvals.j8({pass: {
          propertieValues: "null"
        }}) }
        }}) }
        }}), 
        'A12': jsvals.j8({pass: {
          propertieValues: { 
        "state": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 
        'mainList': jsvals.j8({pass: {
          propertieValues: { 
        "show": jsvals.j8({pass: {
          propertieValues: "false"
        }}), 'no name': jsvals.j8({pass: {
          propertieValues: [   ]
        }}) }
        }}), "locationDocID": jsvals.j8({pass: {
          propertieValues: "no value"
        }}) }
        }}), 
        'A13': jsvals.j8({pass: {
          propertieValues: { 
        "state": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 'mainList': jsvals.j8({pass: {
          propertieValues: { 
        "show": jsvals.j8({pass: {
          propertieValues: "false"
        }}), 'no name': jsvals.j8({pass: {
          propertieValues: [   ]
        }}) }
        }}) }
        }}), 
        'B2': jsvals.j8({pass: {
          propertieValues: { 'forms': jsvals.j8({pass: {
          propertieValues: { 'all': jsvals.j8({pass: {
          propertieValues: { 'userData': jsvals.j8({pass: {
          propertieValues: {   }
        }}) }
        }}) }
        }}) }
        }}), 
        'B4': jsvals.j8({pass: {
          propertieValues: { 
        "totalPurchase": jsvals.j8({pass: {
          propertieValues: "Total da Compra"
        }}), 
        "totalMoney": jsvals.j8({pass: {
          propertieValues: "R$40,00"
        }}), "txtCielo": jsvals.j8({pass: {
          propertieValues: "Ambiente seguro por"
        }}) }
        }}), 
        'B3A': jsvals.j8({pass: {
          propertieValues: { 
        "state": jsvals.j8({pass: {
          propertieValues: "inactive"
        }}), 'currData': jsvals.j8({pass: {
          propertieValues: { 'mainList': jsvals.j8({pass: {
          propertieValues: [   ]
        }}) }
        }}) }
        }}), 
        'B7': jsvals.j8({pass: {
          propertieValues: { 
        "male": jsvals.j8({pass: {
          propertieValues: "Masculino"
        }}), "female": jsvals.j8({pass: {
          propertieValues: "Feminino"
        }}) }
        }}), 
        'B3C': jsvals.j8({pass: {
          propertieValues: { 'currData': jsvals.j8({pass: {
          propertieValues: { 
        "currPrice": jsvals.j8({pass: {
          propertieValues: "0"
        }}), "selecHours": jsvals.j8({pass: {
          propertieValues: "1"
        }}) }
        }}) }
        }}), 
        'ds': jsvals.j8({pass: {
          propertieValues: { 
        'sideLeft': jsvals.j8({pass: {
          propertieValues: { 
        "icons": jsvals.j8({pass: {
          propertieValues: "Ícones"
        }}), 
        "btn": jsvals.j8({pass: {
          propertieValues: "Botões"
        }}), 
        "colors": jsvals.j8({pass: {
          propertieValues: "Cores"
        }}), 
        "forms": jsvals.j8({pass: {
          propertieValues: "Formulário"
        }}), 
        "txtIpt": jsvals.j8({pass: {
          propertieValues: "Entrada de Texto"
        }}), 
        "picker": jsvals.j8({pass: {
          propertieValues: "Picker"
        }}), 
        "radio": jsvals.j8({pass: {
          propertieValues: "Checks & Radios"
        }}), "views": jsvals.j8({pass: {
          propertieValues: "Views"
        }}) }
        }}), 
        'forms': jsvals.j8({pass: {
          propertieValues: { 'pickers': jsvals.j8({pass: {
          propertieValues: { 'pickr1': jsvals.j8({pass: {
          propertieValues: [ 
        jsvals.j8({pass: {
          propertieValues: {"label": jsvals.j8({pass: {
          propertieValues: "Opção 1"
        }})}
        }}), jsvals.j8({pass: {
          propertieValues: {"label": jsvals.j8({pass: {
          propertieValues: "Opção 2"
        }})}
        }}) ]
        }}) }
        }}) }
        }}), 'toggles': jsvals.j8({pass: {
          propertieValues: { 
        "fileUpload": jsvals.j8({pass: {
          propertieValues: "preload"
        }}), "loader": jsvals.j8({pass: {
          propertieValues: "true"
        }}) }
        }}) }
        }}), 'BXX': jsvals.j8({pass: {
          propertieValues: { 'currData': jsvals.j8({pass: {
          propertieValues: { 'mainList': jsvals.j8({pass: {
          propertieValues: [ 
        jsvals.j8({pass: {
          propertieValues: {
        "data": jsvals.j8({pass: {
          propertieValues: "08/06/2024"
        }}), 
        "valor": jsvals.j8({pass: {
          propertieValues: "149,90"
        }}), "status": jsvals.j8({pass: {
          propertieValues: "Pagamento Efetuado"
        }})}
        }}), 
        jsvals.j8({pass: {
          propertieValues: {
        "data": jsvals.j8({pass: {
          propertieValues: "08/07/2024"
        }}), 
        "valor": jsvals.j8({pass: {
          propertieValues: "149,90"
        }}), "status": jsvals.j8({pass: {
          propertieValues: "Pagamento Efetuado"
        }})}
        }}), jsvals.j8({pass: {
          propertieValues: {
        "data": jsvals.j8({pass: {
          propertieValues: "08/08/2024"
        }}), 
        "valor": jsvals.j8({pass: {
          propertieValues: "149,90"
        }}), "status": jsvals.j8({pass: {
          propertieValues: "Aguardando..."
        }})}
        }}) ]
        }}) }
        }}) }
        }}) }
        }}), "banner": jsvals.j8({pass: {
          propertieValues: "https://firebasestorage.googleapis.com/v0/b/flaxboll.appspot.com/o/banner_bg.png?alt=media&token=d1360df7-11c7-4172-89b7-ec8765061b1e"
        }})
          });
          const initObj = initCt();
          // console.log(initObj);

          const arrInitFuncs = [
            // ()=>{}
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
        
