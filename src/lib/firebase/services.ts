import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import app from './init';
import bcrypt from 'bcrypt';

const firestore = getFirestore(app);

export async function getAccount(userData: { email: string }) {
  const obj = query(collection(firestore, 'users'), where('email', '==', userData.email));
  const snapshot = await getDocs(obj);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  if (data) {
    return data[0];
  } else {
    return null;
  }
}

export async function createAccount(
  userData: { email: string; fullName: string; password: string; role?: string },
  callback: Function
) {
  const obj = query(collection(firestore, 'users'), where('email', '==', userData.email));
  const snapshot = await getDocs(obj);
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    callback({ status: false, message: 'Account already exists' });
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = 'user';
    await addDoc(collection(firestore, 'users'), userData)
      .then(() => {
        callback({ status: true, message: 'Account created' });
      })
      .catch((err) => {
        callback({ status: false, message: err.message });
      });
  }
}
