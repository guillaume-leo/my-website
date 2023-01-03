import { getDatabase, set, ref, get, child, onValue } from 'firebase/database';

export const writeInDb = async (app, key, value) => {
  const database = getDatabase(app);

  const result = await set(ref(database, key), value);

  return result;
};

export const getKeyInDb = async (app, key) => {
  const database = ref(getDatabase(app));
  const data = await get(child(database, key)).catch((error) => {
    console.error(error);
  });
  if (data.exists()) {
    return data.val();
  } else {
    console.log('No data available');
  }
};

export const initDb = (app, bandcampLibRef) => {
  const database = getDatabase(app);
  const dbRef = ref(database, 'bandcamp_lib/');
  onValue(dbRef, (snapshot) => {
    if (snapshot.exists() && bandcampLibRef) {
      bandcampLibRef.value = snapshot.val();
    } else {
      console.log('No data available');
    }
  });
};
