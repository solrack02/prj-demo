
type Tprops = { args: any; pass: { fbConfig: any; arrFuncs: any[] } };

export const fireInit = async (props: Tprops) => {
  // ---------- set Props
  const { args, pass } = props;
  const { fbConfig, arrFuncs } = pass;

  // ---------- set Caps Inputs

  // ---------- set Local Imports
  const FB_APP = await import('@firebase/app');

  if (typeof fbConfig === 'object') {
    // ---------- set FB Init on a Variable
    const fbInit = FB_APP.initializeApp(fbConfig, 'secondary');

    for (const currFunc of arrFuncs) {
      await currFunc(fbInit, args);
    }
  } else {
    console.log('fbConfig precisa ser um objeto', { fbConfig });
  }
};

