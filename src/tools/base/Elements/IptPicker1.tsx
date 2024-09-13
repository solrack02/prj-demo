
// ---------- import Packs
import React from 'react';
import { Text, View } from 'react-native';

// ---------- import Local Tools
import { getStlValues, pathSel } from '../project';
// import { SvgView1 } from './SvgView1';
import { useData } from '../../..';

const SvgView1 = () => <></>


type Tprops = {
  pass: { A: any; B: any; C: any; D: any; E: any; F: any; args: any };
};

// IptPicker1 - IptPicker - (Deprecated / Patrimonios) (fromDB_var)
export const IptPicker1 = (props: Tprops) => {
  const { A, B, C, D, E, F, args } = props.pass;

  // ---------- set Caps Inputs
  let children = useData(ct => pathSel(ct, F));
  const { id, nome } = children;
  const fnCapitlize = s => {
    const replaced = s.replace(/_/g, ' ').toLowerCase();
    const xxx = replaced.charAt(0).toUpperCase();
    const yyy = replaced.slice(1);
    const mergeTxt = xxx + yyy;

    return mergeTxt;
  };

  const condChildren = !nome ? 'Selecione...' : fnCapitlize(nome);

  // ---------- set Vars (If Exists)

  // ------- Styles
  const stl1 = getStlValues(A);
  const stl2 = B;
  const condColor2 = Object.values(stl1[0])[0] ?? '#D9D9D9';

  const stlDf1 = {
    width: '100%',
    borderBottomColor: condColor2,
    borderBottomWidth: 1,
    paddingBottom: 5,
  };

  const stlDf2 = { color: '#444', fontSize: 14 };

  const stlIcon = { position: 'absolute', top: 6, right: 6 };

  return (
    <View style={[stlDf1]}>
      <View>
        <Text style={[stlDf2, stl2]} children={condChildren} />

        <View style={stlIcon}>
          <SvgView1
            pass={{
              A: (Svg: any, SvgObj: any) => {
                const { Path } = SvgObj;
                return () => (
                  <Svg
                    width={8}
                    height={6}
                    viewBox="0 0 356 212"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                  >
                    <Path
                      d="m34 34 144 144L322 34"
                      stroke={condColor2}
                      strokeWidth={52}
                      strokeMiterlimit={10}
                      strokeLinecap="square"
                    />
                  </Svg>
                );
              },

              B: ``,

              C: '',

              D: '',

              E: '',

              args,
            }}
          />
        </View>
      </View>
    </View>
  );
};

