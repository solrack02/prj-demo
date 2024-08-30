
// ---------- import Local Tools
import { fireInit } from './fireInit';

import { uploadFile } from './uploadFile';

import { updateDoc } from './updateDoc';
import { getDocs } from './getDocs';
import { getDoc } from './getDoc';

import { deleteDoc } from './deleteDoc';
import { setDoc } from './setDoc';

import { whereConds } from './whereConds';
import { where } from './where';

export const firebase = {
  fireInit,

  uploadFile,

  getDoc,
  getDocs,
  updateDoc,

  deleteDoc,
  setDoc,

  whereConds,
  where,
};

